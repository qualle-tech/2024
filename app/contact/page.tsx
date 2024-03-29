"use client"

import theme from "../../styles/theme"
import PageContainer from "../_components/PageContainer"
import { mdiLoading } from "@mdi/js"
import Icon from "@mdi/react"
import { useState } from "react"
import styled from "styled-components"

export default function Page() {
  const [formData, setFormData] = useState(null)
  const [message, setMessage] = useState("Send")
  const [isLoading, setIsLoading] = useState(false)

  // TODO: add disabled state to button!
  const sendEmail = async () => {
    if (
      !formData ||
      !formData.name ||
      !formData.name.length ||
      !formData.request ||
      !formData.request.length ||
      !formData.email ||
      !formData.email.length
    ) {
      // checking not working right
      setMessage("Please fill out all form fields")
      return
    }
    try {
      setIsLoading(true)
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          service_id: "service_ie347fw",
          user_id: "R7AHgjOFyyr1qSNYp",
          template_id: "template_snd8tbq",
          template_params: formData,
        }),
      })
      setFormData(null)
      setIsLoading(false)
      setMessage("Request sent")
    } catch (e) {
      setMessage("The email could not be sent please make sure you typed in your details correctly and try again")
    }
    setTimeout(() => {
      setMessage("Send")
    }, 10000)
  }

  return (
    <PageContainer>
      <h2>Contact Us</h2>
      <Form>
        <Label>
          Name*
          <Input
            type="text"
            placeholder="Your Name Here"
            value={formData?.name || ""}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </Label>
        <Label>
          Email*
          <Input
            type="email"
            placeholder="Your Email Here"
            value={formData?.email || ""}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </Label>
        <Label>
          Request*
          <TextArea
            placeholder="Details about your Project or Questions Here"
            required
            rows={10}
            value={formData?.request || ""}
            onChange={(e) => setFormData({ ...formData, request: e.target.value })}
          />
        </Label>
        <Button type="button" onClick={sendEmail}>
          {isLoading ? <Icon path={mdiLoading} spin size={0.8} /> : message}
        </Button>
      </Form>
    </PageContainer>
  )
}
const Form = styled.div`
  display: grid;
  grid-gap: 1rem;
  overflow: auto;
  padding-right: 2rem;
  @media screen and (max-width: 1023px) and (orientation: portrait) {
    align-items: start;
    align-content: start;
    grid-gap: 2rem;
  }
`

const Label = styled.label`
  font-size: 1.5rem;
  display: grid;
  grid-gap: 0.5rem;
`

const Input = styled.input`
  padding: 1rem;
  font-size: 1.2rem;
  color: ${theme.colors.neutralDark};
  border-radius: 0.5rem;
`

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 1.2rem;
  color: ${theme.colors.neutralDark};
  resize: vertical;
  border-radius: 0.5rem;
`

const Button = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
  background: ${theme.colors.interactionDark};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  border-radius: 0.5rem;
`
