import {
  faAngleDown,
  faAngleUp,
  faCheck,
  faCircleQuestion,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Package = () => {
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const [isActive4, setActive4] = useState(false);
  const [isActive5, setActive5] = useState(false);
  const [isActive6, setActive6] = useState(false);
  const [isActive7, setActive7] = useState(false);
  const [isActive8, setActive8] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  const toggleClass2 = () => {
    setActive2(!isActive2);
  };
  const toggleClass3 = () => {
    setActive3(!isActive3);
  };
  const toggleClass4 = () => {
    setActive4(!isActive4);
  };
  const toggleClass5 = () => {
    setActive5(!isActive5);
  };
  const toggleClass6 = () => {
    setActive6(!isActive6);
  };
  const toggleClass7 = () => {
    setActive7(!isActive7);
  };
  const toggleClass8 = () => {
    setActive8(!isActive8);
  };
  return (
    <section
      class="
   px-12
   bg-white
   pt-10
   lg:pt-[120px]
   pb-12
   lg:pb-[90px]
   relative
   z-20
   overflow-hidden
   "
    >
      <div class="container">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4">
            <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span class="font-semibold text-lg text-primary mb-2 block">
                Pricing Table
              </span>
              <h2
                class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              >
                Our Pricing Plan
              </h2>
              <p class="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center -mx-4">
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              class="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
            >
              <span class="text-primary font-semibold text-lg block mb-4">
                Basic
              </span>
              <h2 class="font-bold text-dark mb-5 text-[42px]">
                $297
                <span class="text-base text-body-color font-medium">
                  / year
                </span>
              </h2>
              <p
                class="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
              >
                billed yearly
              </p>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive ? (
                          <FontAwesomeIcon
                            onClick={toggleClass}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        General
                        <abbr title="This is general option">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Number of sites</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Media manager</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">3rd party integrations</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Team members</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Powered by logo</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive2 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass2}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass2}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Funnel Builder
                        <abbr title="This is funnel builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive2 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Of funnels</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of templatesgroups</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Split testing</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-error"
                          icon={faXmark}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Mobile optimizer</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">In-built conversion tools</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Html download</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-error"
                          icon={faXmark}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Save as template</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-error"
                          icon={faXmark}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Clone page</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Unique visitors</td>
                      <td>25,000</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Transfer funnels</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-error"
                          icon={faXmark}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive3 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass3}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass3}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Product Builder
                        <abbr title="This is product builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive3 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Of products</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Membership module products</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Digital products</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Instasuite checkpoint</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Multiple price point</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Coupons & discounts</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-error"
                          icon={faXmark}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Automation actions</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-error"
                          icon={faXmark}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">
                        Digital product delivery-Email
                      </td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">
                        Digital product delivery-Redirect URL
                      </td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">
                        Digital product delivery-Upload File
                      </td>
                      <td>
                        <FontAwesomeIcon
                          className="text-error"
                          icon={faXmark}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">
                        Digital product delivery-ISPDN
                      </td>
                      <td>
                        <FontAwesomeIcon
                          className="text-error"
                          icon={faXmark}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Export orders to csv</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive4 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass4}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass4}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Membership Builder
                        <abbr title="This is membership builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive4 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">In-built SMTP</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of themes</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of members</td>
                      <td>1000</td>
                    </tr>

                    <tr>
                      <td className="text-xs">Member tags</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-error"
                          icon={faXmark}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Drip-feed</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-error"
                          icon={faXmark}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-xs">Member progress tracking</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Quiz tracking</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Design editor</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive5 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass5}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass5}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        List Builder
                        <abbr title="This is list builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive5 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">SMTP setup</td>
                      <td>own</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Blacklist domain, email, IP</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Block role-based email</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of lists</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of subscribers</td>
                      <td>1,000</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Manual/Bulk import</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">List segmentation</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-error"
                          icon={faXmark}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Automations</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-error"
                          icon={faXmark}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-xs">Optin forms</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Broadcasts</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Sequences</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Save email templates</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive6 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass6}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass6}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Blog Builder
                        <abbr title="This is blog builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive6 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Widgets</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Menu</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Theme customizations</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of themes</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of posts</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Post catagories</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive7 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass7}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass7}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Affiliate Center
                        <abbr title="This is affiliate center">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>No</th>
                    </tr>
                  </thead>
                  <tbody className={isActive7 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">In-built SMTP</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-xs">Promotion tools</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-xs">Manage Commissions</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of affiliates</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of themes</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-xs">Theme customization</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive8 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass8}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass8}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Support Desk
                        <abbr title="This is support desk">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>No</th>
                    </tr>
                  </thead>
                  <tbody className={isActive8 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Of staff</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-xs">In-built SMTP</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of canned responses</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-xs">Knowledgebase</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of themes</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                href="javascript:void(0)"
                class="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-primary
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-primary hover:border-primary
                  transition
                  "
              >
                Buy Basic
              </a>
              <div>
                <span class="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                        <stop
                          offset="1"
                          stop-color="#C4C4C4"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span class="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="w-48 rounded-full text-white text-center py-2 mx-auto my-[-5px] bg-primary">
              Best value
            </div>
            <div
              class="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
            >
              <span class="text-primary font-semibold text-lg block mb-4">
                Business
              </span>
              <h2 class="font-bold text-dark mb-5 text-[42px]">
                $697
                <span class="text-base text-body-color font-medium">
                  / year
                </span>
              </h2>
              <p
                class="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
              >
                billed yearly
              </p>
              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive ? (
                          <FontAwesomeIcon
                            onClick={toggleClass}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        General
                        <abbr title="This is general option">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Number of sites</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Media manager</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">3rd party integrations</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Team members</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Powered by logo</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive2 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass2}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass2}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Funnel Builder
                        <abbr title="This is funnel builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive2 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Of funnels</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of templatesgroups</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Split testing</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Mobile optimizer</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">In-built conversion tools</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Html download</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Save as template</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Clone page</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Unique visitors</td>
                      <td>100,000</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Transfer funnels</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-error"
                          icon={faXmark}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive3 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass3}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass3}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Product Builder
                        <abbr title="This is product builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive3 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Of products</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Membership module products</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Digital products</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Instasuite checkpoint</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Multiple price point</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Coupons & discounts</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Automation actions</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">
                        Digital product delivery-Email
                      </td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">
                        Digital product delivery-Redirect URL
                      </td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">
                        Digital product delivery-Upload File
                      </td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">
                        Digital product delivery-ISPDN
                      </td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Export orders to csv</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive4 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass4}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass4}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Membership Builder
                        <abbr title="This is membership builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive4 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">In-built SMTP</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of themes</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of members</td>
                      <td>5000</td>
                    </tr>

                    <tr>
                      <td className="text-xs">Member tags</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Drip-feed</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-xs">Member progress tracking</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Quiz tracking</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Design editor</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive5 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass5}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass5}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        List Builder
                        <abbr title="This is list builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive5 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">SMTP setup</td>
                      <td>own</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Blacklist domain, email, IP</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Block role-based email</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of lists</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of subscribers</td>
                      <td>5,000</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Manual/Bulk import</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">List segmentation</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Automations</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-xs">Optin forms</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Broadcasts</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Sequences</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Save email templates</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive6 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass6}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass6}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Blog Builder
                        <abbr title="This is blog builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive6 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Widgets</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Menu</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Theme customizations</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of themes</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of posts</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Post catagories</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive7 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass7}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass7}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Affiliate Center
                        <abbr title="This is affiliate center">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive7 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">In-built SMTP</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Promotion tools</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Manage Commissions</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of affiliates</td>
                      <td>1000</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of themes</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Theme customization</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive8 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass8}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass8}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Support Desk
                        <abbr title="This is support desk">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive8 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Of staff</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td className="text-xs">In-built SMTP</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of canned responses</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Knowledgebase</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of themes</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                href="javascript:void(0)"
                class="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-white
                  bg-primary
                  border border-primary
                  rounded-md
                  text-center
                  p-4
                  hover:bg-opacity-90
                  transition
                  "
              >
                Buy Business
              </a>
              <div>
                <span class="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                        <stop
                          offset="1"
                          stop-color="#C4C4C4"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span class="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              class="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
            >
              <span class="text-primary font-semibold text-lg block mb-4">
                Pro
              </span>
              <h2 class="font-bold text-dark mb-5 text-[42px]">
                $997
                <span class="text-base text-body-color font-medium">
                  / year
                </span>
              </h2>
              <p
                class="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
              >
                billed yearly
              </p>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive ? (
                          <FontAwesomeIcon
                            onClick={toggleClass}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        General
                        <abbr title="This is general option">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Number of sites</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Media manager</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">3rd party integrations</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Team members</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Powered by logo</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive2 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass2}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass2}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Funnel Builder
                        <abbr title="This is funnel builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive2 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Of funnels</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of templatesgroups</td>
                      <td>99999</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Split testing</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Mobile optimizer</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">In-built conversion tools</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Html download</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Save as template</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Clone page</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Unique visitors</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Transfer funnels</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-error"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive3 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass3}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass3}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Product Builder
                        <abbr title="This is product builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive3 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Of products</td>
                      <td>250</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Membership module products</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Digital products</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Instasuite checkpoint</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Multiple price point</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Coupons & discounts</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Automation actions</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">
                        Digital product delivery-Email
                      </td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">
                        Digital product delivery-Redirect URL
                      </td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">
                        Digital product delivery-Upload File
                      </td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">
                        Digital product delivery-ISPDN
                      </td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Export orders to csv</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive4 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass4}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass4}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Membership Builder
                        <abbr title="This is membership builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive4 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">In-built SMTP</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of themes</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of members</td>
                      <td>100,000</td>
                    </tr>

                    <tr>
                      <td className="text-xs">Member tags</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Drip-feed</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-xs">Member progress tracking</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Quiz tracking</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Design editor</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive5 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass5}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass5}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        List Builder
                        <abbr title="This is list builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive5 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">SMTP setup</td>
                      <td>own</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Blacklist domain, email, IP</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Block role-based email</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of lists</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of subscribers</td>
                      <td>100,000</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Manual/Bulk import</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">List segmentation</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Automations</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-xs">Optin forms</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Broadcasts</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Sequences</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Save email templates</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive6 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass6}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass6}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Blog Builder
                        <abbr title="This is blog builder">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive6 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Widgets</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Menu</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Theme customizations</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of themes</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of posts</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Post catagories</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive7 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass7}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass7}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Affiliate Center
                        <abbr title="This is affiliate center">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive7 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">In-built SMTP</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Promotion tools</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Manage Commissions</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of affiliates</td>
                      <td>5000</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of themes</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Theme customization</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="overflow-x-auto mb-1">
                <table class="table w-full">
                  <thead className="opacity-75">
                    <tr>
                      <th>
                        {!isActive8 ? (
                          <FontAwesomeIcon
                            onClick={toggleClass8}
                            className="mr-2"
                            icon={faAngleDown}
                          ></FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon
                            onClick={toggleClass8}
                            className="mr-2"
                            icon={faAngleUp}
                          ></FontAwesomeIcon>
                        )}
                        Support Desk
                        <abbr title="This is support desk">
                          <FontAwesomeIcon
                            className="ml-2 text-green-400 text-sm"
                            icon={faCircleQuestion}
                          ></FontAwesomeIcon>
                        </abbr>
                      </th>
                      <th>Yes</th>
                    </tr>
                  </thead>
                  <tbody className={isActive8 ? "" : "hidden"}>
                    <tr>
                      <td className="text-xs">Of staff</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td className="text-xs">In-built SMTP</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of canned responses</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Knowledgebase</td>
                      <td>
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faCheck}
                        ></FontAwesomeIcon>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-xs">Of themes</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <a
                href="javascript:void(0)"
                class="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-primary
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-primary hover:border-primary
                  transition
                  "
              >
                Buy Pro
              </a>
              <div>
                <span class="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                        <stop
                          offset="1"
                          stop-color="#C4C4C4"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span class="absolute right-4 top-4 z-[-1]">
                  <svg
                    width="41"
                    height="89"
                    viewBox="0 0 41 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="38.9138"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 38.9138 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 38.9138 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 38.9138 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 38.9138 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 38.9138 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 38.9138 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 38.9138 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.9138"
                      cy="1.42021"
                      r="1.42021"
                      transform="rotate(180 38.9138 1.42021)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 26.4157 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 26.4157 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 26.4157 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 26.4157 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 26.4157 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 26.4157 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 26.4157 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.4157"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 26.4157 1.4202)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 13.9177 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 13.9177 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 13.9177 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 13.9177 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 13.9177 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 13.9177 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 13.9177 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.9177"
                      cy="1.42019"
                      r="1.42021"
                      transform="rotate(180 13.9177 1.42019)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="87.4849"
                      r="1.42021"
                      transform="rotate(180 1.41963 87.4849)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="74.9871"
                      r="1.42021"
                      transform="rotate(180 1.41963 74.9871)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="62.4892"
                      r="1.42021"
                      transform="rotate(180 1.41963 62.4892)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="38.3457"
                      r="1.42021"
                      transform="rotate(180 1.41963 38.3457)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="13.634"
                      r="1.42021"
                      transform="rotate(180 1.41963 13.634)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="50.2754"
                      r="1.42021"
                      transform="rotate(180 1.41963 50.2754)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="26.1319"
                      r="1.42021"
                      transform="rotate(180 1.41963 26.1319)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.41963"
                      cy="1.4202"
                      r="1.42021"
                      transform="rotate(180 1.41963 1.4202)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
