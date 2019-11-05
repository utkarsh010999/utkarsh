import React, { Component } from "react";
import Header from "../layout/Header";

export default class Disclaimer extends Component {
  render() {
    return (
      <div>
        <Header />
        <h2 style={{ marginTop: "5%", marginLeft: "5%" }}>Disclaimer</h2>
        <p style={{ marginLeft: "5%", marginRight: "5%" }}>
          Hitech Insurance Broking Services Ltd. (HIBSL) , through its
          website http://www.apnainsure.com/, intends to provide clear
          information about insurance products and services. The information
          and data are generic in nature. Although our efforts are to offer
          accurate and responsible data, we are not responsible for any sort of
          discrepancies. There is no purpose of violating any copyright or
          intellectual copyrights issue. All information provided on the
          portal http://www.apnainsure.com/ is subject to the discretion of the
          same and is likely to change without any notice. Though, any changes
          in public utility will be communicated immediately in our portal. It
          is recommended that any decision that the user is taking basis the
          information provided should be verified at the time of buying. In case
          of any discrepancy, Hitech Insurance Broking Services Ltd. (HIBSL)
          would try to ensure that refunds are processed to the customer within
          the applicable free look period. We have tried to maintain high
          standards in quality, clarity and accuracy of the material posted on
          the portal. However Hitech Insurance Broking Services Ltd. (HIBSL) is
          not legally responsible for the same in any matter what so ever.
          Employees, partners and associated staff of Hitech Insurance Broking
          Services Ltd. (HIBSL) are not accountable for any loss, harm or
          damage occurring due to usage of information from the portal.
          Customers are advised to use their own discretion in such matters.  It
          is important to understand that insurance is a subject matter of
          solicitation and market risks. It is the responsibility of the
          customer to understand the limitations of insurance policies and the
          risks involved, we take no liability in such cases. Read the subject
          documents carefully. The information provided on the portal is
          of financial, insurance and legal purposes. It is a mutual
          understanding that customers association with the portal will be at
          the customer's preference and risk.
        </p>
        <h3 style={{ marginLeft: "5%" }}>Product</h3>{" "}
        <p style={{ marginLeft: "5%", marginRight: "5%" }}>
          
          The product and services offered by the insurer are subject to the
          policy terms and conditions of the respective insurers. Please read
          the Exclusions  page here to see what is not covered in various
          policies.
        </p>
      </div>
    );
  }
}
