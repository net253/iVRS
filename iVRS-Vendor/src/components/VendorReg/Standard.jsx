import React, { useState, useEffect } from "react";
import {
  Text,
  Grid,
  GridItem,
  HStack,
  Input,
  Spacer,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Textarea,
  Select,
} from "@chakra-ui/react";
import {
  useCertifications,
  useBenefit,
  usePaymentmethods,
  useCurrencycode,
} from "../../store";
import {
  fetchcertificate,
  fetchbenefitlist,
  fetchpaymentmethods,
  fetcurrencylist,
} from "../../services/feth-api";
import useFormInput from "../../store/forminput/forminput";

export default function Standard() {
  const { certifications, updateCertifications } = useCertifications();
  const { paymentmethods, updatePaymentmethods } = usePaymentmethods();
  const { currencycode, updateCurrencycode } = useCurrencycode();
  const { benefit, updateBenefit } = useBenefit();
  const [checkedItems, setCheckedItems] = useState({});
  const [checkedItemsBenefits, setCheckedItemsBenefits] = useState({});
  const {
    //FormDetail,
    updateCertificate,
    getCertifications,
    updateOtherCertificate,
    updateBenefits,
    getBenefits,
    updateOtherBenefit,
    updateCreditTerm,
    updateEarnest,
    updateFormDetail,
  } = useFormInput();

  function onChangecheckbox(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems({ ...checkedItems, [item]: isChecked });
    certifications.map((cert) => {
      if (cert.name === item) {
        updateCertificate(cert.name, isChecked, cert.label);
      }
    });
  }

  function onChangeForminput(e) {
    const { name, value } = e.target;
    updateFormDetail(name, value);
  }

  function onChangeOther(e) {
    updateOtherCertificate(e.target.value);
  }

  function onChangeOtherBenefits(e) {
    updateOtherBenefit(e.target.value);
  }

  function onChangeCreditTerms(value) {
    updateCreditTerm(value);
  }

  function onChangeEarnest(e) {
    updateEarnest(e.target.value);
  }

  function onChangecheckboxBenefits(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItemsBenefits({ ...checkedItemsBenefits, [item]: isChecked });
    benefit.map((bnf) => {
      if (bnf.name === item) {
        updateBenefits(bnf.name, isChecked, bnf.label);
      }
    });
  }

  const getcertificate = () => {
    fetchcertificate().then((data) => {
      updateCertifications(data);
      getCertifications(data);
    });
  };

  const getbenefit = () => {
    fetchbenefitlist().then((data) => {
      updateBenefit(data);
      getBenefits(data);
    });
  };

  const getcreditterm = () => {
    fetchpaymentmethods().then((data) => {
      updatePaymentmethods(data);
    });
  };

  const getcurrency = () => {
    fetcurrencylist().then((data) => {
      updateCurrencycode(data);
    });
  };

  //fechh companylist
  var timer1 = 60 * 1000;
  useEffect(() => {
    const initPage = setTimeout(() => {
      getcertificate();
      getbenefit();
      getcreditterm();
      getcurrency();
    }, 200);
    const timer = setInterval(() => {
      getcertificate();
      getbenefit();
      getcreditterm();
      getcurrency();
    }, timer1);
    return () => {
      clearTimeout(initPage);
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <HStack mt={5} px="10px">
        <Text
          className="font-thai"
          fontWeight="bold"
          fontSize={{ base: "sm", sm: "md" }}
        >
          มาตรฐานและการรับรองที่ได้รับในปัจจุบัน /{" "}
          <span>Current Standards and Certifications</span>
        </Text>
        <Spacer />
        <Text fontWeight="light" fontSize="sm">
          Step 3 of 6
        </Text>
      </HStack>

      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={3}
        alignItems="center"
        borderTop="2px"
        borderColor="blackAlpha.600"
        py={3}
        my={1}
        fontSize={{ base: "sm", sm: "sm" }}
        px="10px"
      >
        {/* Q1 */}
        <GridItem w="100%" colSpan={3}>
          <Text className="font-thai" fontWeight="bold">
            1. การรับรองที่ได้รับ / <span>Kind of certificate approved</span>
          </Text>
        </GridItem>
        <GridItem w="100%" colSpan={3} fontSize={{ base: "sm", sm: "sm" }}>
          <CheckboxGroup colorScheme="green">
            <Grid
              templateColumns={{ base: "repeat(2,1fr)", md: "repeat(5,1fr)" }}
              gap={2}
              fontSize={{ base: "sm", sm: "sm" }}
            >
              {certifications?.map((info, i) => (
                <GridItem
                  key={i}
                  w="100%"
                  display="flex"
                  colSpan={info == "อื่นๆ" ? "2" : "1"}
                >
                  <Checkbox
                    key={i}
                    name={info.name}
                    onChange={onChangecheckbox}
                  >
                    {info.label}
                  </Checkbox>
                  {info.label == "อื่นๆ" ? (
                    <Input
                      placeholder="โปรดระบุ"
                      ml={5}
                      size="sm"
                      isDisabled={!checkedItems[info.name]}
                      onChange={onChangeOther}
                    />
                  ) : (
                    ""
                  )}
                </GridItem>
              ))}
              <GridItem></GridItem>
            </Grid>
          </CheckboxGroup>
        </GridItem>

        <GridItem w="100%" colSpan={3}>
          <Text className="font-thai" fontWeight="bold">
            2. สิทธิประโยชน์ที่ได้รับ / <span>Benefits</span>
          </Text>
        </GridItem>
        <GridItem w="100%" colSpan={3} fontSize={{ base: "sm", sm: "sm" }}>
          <CheckboxGroup colorScheme="green">
            <Grid
              templateColumns={{ base: "repeat(2,1fr)", md: "repeat(5,1fr)" }}
              gap={2}
              fontSize={{ base: "sm", sm: "sm" }}
            >
              {benefit?.map((info, i) => (
                <GridItem
                  key={i}
                  w="100%"
                  display="flex"
                  colSpan={checkedItemsBenefits.Other ? "2" : "1"}
                >
                  <Checkbox
                    key={i}
                    name={info.name}
                    onChange={onChangecheckboxBenefits}
                  >
                    {info.label}
                  </Checkbox>
                  {info.name == "Other" ? (
                    <Input
                      placeholder="โปรดระบุ"
                      ml={5}
                      size="sm"
                      display={
                        !checkedItemsBenefits[info.name] ? "none" : "block"
                      }
                      isDisabled={!checkedItemsBenefits[info.name]}
                      onChange={onChangeOtherBenefits}
                    />
                  ) : (
                    ""
                  )}
                </GridItem>
              ))}
              <GridItem></GridItem>
            </Grid>
          </CheckboxGroup>
        </GridItem>

        {/* Q2 */}
        <GridItem w="100%" colSpan={3}>
          <Text className="font-thai" fontWeight="bold">
            3. เงื่อนไขการชำระเงิน / <span>Term of payment</span>
          </Text>
          <GridItem w="100%" colSpan={3} fontSize={{ base: "sm", sm: "sm" }}>
            <Text fontWeight={"bold"} py="10px" px="1.2rem">
              3.1 การชำระเงิน การให้เครดิตเทอม / <span>Credit Term</span>
            </Text>
            <RadioGroup
              colorScheme="green"
              px="1.2rem"
              onChange={onChangeCreditTerms}
            >
              <Grid
                templateColumns={{ base: "repeat(2,1fr)", md: "repeat(5,1fr)" }}
                gap={2}
                fontSize={{ base: "sm", sm: "sm" }}
              >
                {paymentmethods?.map((info, i) => (
                  <GridItem key={i} w="100%" display="flex">
                    <Radio key={i} value={info.value}>
                      {info.label}
                    </Radio>
                  </GridItem>
                ))}
                <GridItem></GridItem>
              </Grid>
            </RadioGroup>
          </GridItem>
          <Text className="font-thai" fontWeight="bold" px="1.2rem">
            3.2 การวางมัดจำ / <span>Earnest</span>
          </Text>
          <Textarea
            placeholder="กรุณาระบบเงื่อนไขการชำระสินค้า เช่น ชำระเงินสด 30% เมื่อยืนยันการสั่งซื้อ และชำระส่วนที่เหลือเมื่อจัดส่งสินค้าเสร็จสมบูรณ์"
            size="sm"
            rows={3}
            px="1.2rem"
            onChange={onChangeEarnest}
          />
        </GridItem>
        <GridItem w="100%" colSpan={{ base: "3", md: "1" }}>
          <Text
            className="font-thai"
            fontSize={{ base: "sm", sm: "sm" }}
            fontWeight={"bold"}
            px="1.2rem"
          >
            วงเงินอนุมัติ / <span>Approval limit</span>
          </Text>
        </GridItem>
        <GridItem w="100%" colSpan={{ base: "2", md: "1" }}>
          <Input
            fontSize={{ base: "sm", sm: "sm" }}
            w="100%"
            type="number"
            placeholder="กรุณาระบุตัวเลขเท่านั้น / Please enter numbers only"
            name={"ApprovalLimit"}
            //value={Number(FormDetail.ApprovalLimit).toLocaleString("en-US")}
            onChange={onChangeForminput}
          />
        </GridItem>
        <GridItem w="100%" fontSize={{ base: "sm", sm: "sm" }}>
          <Select
            placeholder="Select Currency"
            fontSize={{ base: "sm", sm: "sm" }}
            onChange={onChangeForminput}
            name={"Currency"}
          >
            {currencycode?.map((info, i) => (
              <option key={i}>{info}</option>
            ))}
          </Select>
        </GridItem>
      </Grid>
    </>
  );
}
