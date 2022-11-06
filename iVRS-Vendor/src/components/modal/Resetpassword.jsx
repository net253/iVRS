import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import useResetPassword from "../../store/ResetPasswordStore/useResetPassword";
import shallow from "zustand/shallow";
//import { validatePassword } from "../../libs/Validate";
import { fetchResetPassword } from "../../services/feth-api";
import { toastMixin } from "../../libs/swalCustom";
import { RiLockPasswordLine } from "react-icons/ri";

const ResetpasswordModal = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { updateResetPassword, ResetPassword } = useResetPassword(
    (state) => ({
      updateResetPassword: state.updateResetPassword,
      ResetPassword: state.ResetPassword,
    }),
    shallow
  );

  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  const handleClick1 = () => setShow1(!show1);
  const handleClick2 = () => setShow2(!show2);
  const handleClick3 = () => setShow3(!show3);
  console.log("ResetPassword", ResetPassword);

  const handleForminput = (e) => {
    console.log("e.target.name", e.target.value);
    const { name, value } = e.target;
    updateResetPassword(name, value);
  };

  //const { newPassword, comfirmPassword } = ResetPassword;

  const handleResetPassword = () => {
    fetchResetPassword(ResetPassword).then((data) => {
      if (data.state) {
        onClose();
        toastMixin.fire({
          icon: "success",
          title: data.msg,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        toastMixin.fire({
          icon: "error",
          title: "เปลี่ยนรหัสผ่านไม่สำเร็จ",
          text: data.message,
        });
      }
    });
  };

  return (
    <div>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>เปลี่ยนรหัสผ่าน</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>รหัสผ่านเดิม</FormLabel>
              <InputGroup>
                <Input
                  ref={initialRef}
                  placeholder="รหัสผ่านเดิม"
                  type={show1 ? "text" : "password"}
                  name="oldPassword"
                  onChange={handleForminput}
                />
                <InputLeftElement pointerEvents="none">
                  <Icon as={RiLockPasswordLine} color="gray.300" />
                </InputLeftElement>
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick1}>
                    {show1 ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>รหัสผ่านใหม่</FormLabel>
              <InputGroup>
                <Input
                  ref={initialRef}
                  placeholder="รหัสผ่านใหม่"
                  type={show2 ? "text" : "password"}
                  name="newPassword"
                  onChange={handleForminput}
                />
                <InputLeftElement pointerEvents="none">
                  <Icon as={RiLockPasswordLine} color="gray.300" />
                </InputLeftElement>
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick2}>
                    {show2 ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>ยืนยันรหัสผ่าน</FormLabel>
              <InputGroup>
                <Input
                  ref={initialRef}
                  placeholder="ยืนยันรหัสผ่าน"
                  type={show3 ? "text" : "password"}
                  name="confirmPassword"
                  onChange={handleForminput}
                />
                <InputLeftElement pointerEvents="none">
                  <Icon as={RiLockPasswordLine} color="gray.300" />
                </InputLeftElement>
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick3}>
                    {show3 ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="messenger"
              mr={3}
              onClick={handleResetPassword}
            >
              เปลี่ยนรหัสผ่าน
            </Button>
            <Button onClick={onClose}>ยกเลิก</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ResetpasswordModal;
