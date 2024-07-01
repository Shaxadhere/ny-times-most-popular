import axios from "axios";
import { createStandaloneToast } from "@chakra-ui/toast";
import { makeRequestUrl } from "../utils/urlUtils.js";
const { toast } = createStandaloneToast();

async function Get({
  path,
  token,
  toastMessage,
  toastError,
  contentType = "application/json",
}) {
  try {
    let url = makeRequestUrl(path)

    const headers = { "Content-Type": contentType };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const response = await axios.get(url, { headers });

    if (toastMessage) {
      let message = response.data.message?.message || "Success!";
      toast({
        title: "Congrats!",
        description: message,
        status: "success",
        id: message + new Date().getTime(),
        isClosable: true,
        position: "top",
        variant: "subtle",
      });
    }
    return response.data;
  } catch (error) {
    if (toastError) {
      let message = error?.response?.data.message?.message || "Unknown Error!";
      message = message.length > 130 ? "Unknown Error!" : message;
      toast({
        title: "Error!",
        description: message,
        status: "error",
        isClosable: true,
        position: "top",
        variant: "subtle",
        id: message + new Date().getTime(),
      });
    }
    console.warn("Error in Get.js: ", error)
    throw new Error(error)
  }
}

export { Get };