"use client"

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Dropdown } from "flowbite-react";
import { Copy, ExternalLink, Mail, Check } from 'lucide-react';
import { Tooltip } from 'react-tooltip';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  const [email] = useState("javedavalos@gmail.com");
  const [copied, setCopied] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("メール送信に成功しました");
        reset();
      } else {
        toast.error("メール送信に失敗しました");
      }
    } catch (error) {
      toast.error("エラーが発生しました");
    }
  };

  const openEmailApp = (app: string) => {
    let mailto = `mailto:${email}`;
    if (app === 'gmail') {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
    } else if (app === 'outlook') {
      window.open(`https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}`, '_blank');
    } else {
      window.location.href = mailto;
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    toast.success("メールアドレスをコピーしました")
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col gap-6 w-full mx-auto text-light-gray">
        <div>
          <label htmlFor="name" className="block text-sm font-extralight text-light-gray mb-1">お名前<span className="text-red-600 ml-1 text-lg leading-3">*</span></label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "名前は必須です" })}
            className="input"
            placeholder="Carlos Jave"
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-extralight text-light-gray mb-1">メールアドレス<span className="text-red-600 ml-1 text-lg leading-3">*</span></label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "メールアドレスは必須です",
              pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "メールアドレスが無効です" } })}
            className="input"
            placeholder="sample@mail.com"
            onChange={(e) => {
              e.target.value = e.target.value.toLowerCase();
            }}
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-extralight text-light-gray mb-1">メッセージ<span className="text-red-600 ml-1 text-lg leading-3">*</span></label>
          <textarea
            id="message"
            {...register("message", { required: "メッセージは必須です" })}
            className="textarea"
            placeholder="message"
          />
          {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
        </div>

        <button type="submit" className="w-full md:w-[170px] ml-auto px-2 py-2 font-extralight text-sm bg-indigo-500 text-light-gray rounded-md shadow-sm hover:bg-indigo-700">
          メール送信
        </button>
      </form>

      <div className="inline-flex items-center justify-center w-full mt-10">
        <hr className="w-full h-px my-8 bg-secondary border-0"/>
        <span className="absolute px-3 font-medium -translate-x-1/2 bg-[#1f1934] left-1/2 text-white">or</span>
      </div>

      <div className="mt-10">

        <div className="flex justify-center md:justify-between flex-wrap gap-4">
          <div className="flex gap-2 items-center">
            <p className="flex gap-1 items-center"><span><Mail size={20} strokeWidth={1} /></span><span className="font-medium">{email}</span></p>
            <CopyToClipboard text={email} onCopy={handleCopy}>
              <button className="px-1 py-1 bg-indigo-500 text-light-gray rounded-md shadow-sm hover:bg-indigo-700" data-tooltip-id="copyTooltip" data-tooltip-content="メールアドレスをコピー">
                {copied ? <Check size={15} color="#fff" strokeWidth={1} /> : <Copy size={15} color="#fff" strokeWidth={1} />}
              </button>
            </CopyToClipboard>
            <Tooltip
              id="copyTooltip"
              place="top"
              style={
                { 
                  backgroundColor: "rgb(31, 41, 55)",
                  fontSize: "10px",
                  boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px" 
                }
              }
            />
          </div>
          
          <Dropdown label="メールアプリで開" placement="top" dismissOnClick={false} className="rounded-lg p-4 bg-gray-800 border-0">
            <Dropdown.Header className="p-0 mb-2">
              <span className="block text-sm text-white">Send email to…</span>
              <span className="block truncate text-sm font-medium text-white">{email}</span>
            </Dropdown.Header>
            <Dropdown.Item onClick={() => openEmailApp('gmail')} className="mt-2 flex items-center px-4 py-2 mb-2 text-sm bg-gray-600/30 text-light-gray rounded-sm shadow-sm hover:bg-gray-700">
              Gmailで開く <ExternalLink className="ml-auto" size={18} strokeWidth={1.5} />
            </Dropdown.Item>
            <Dropdown.Item onClick={() => openEmailApp('outlook')} className="flex items-center px-4 py-2 mb-2 text-sm bg-gray-600/30 text-light-gray rounded-sm shadow-sm hover:bg-gray-700">
              Outlookで開く <ExternalLink className="ml-auto" size={18} strokeWidth={1.5} />
            </Dropdown.Item>
            <Dropdown.Item onClick={() => openEmailApp('default')} className="block px-4 py-2 text-sm bg-gray-600/30 text-light-gray rounded-sm shadow-sm hover:bg-gray-700">
              デフォルトのメールアプリで開く
            </Dropdown.Item>
          </Dropdown>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
