import { Form, TextField, TextAreaField, Submit, FieldError, useForm } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()

  const [create, {loading}] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your message!')
      formMethods.reset()
    }
  })
  const onSubmit = (data) =>{
    console.log(data);
    create({
      variables: {
        input: data,
      },
    })
  }

  return (
    <>
    <Toaster />
      <MetaTags title="Contact" description="Contact page" />
      <Form onSubmit={onSubmit} formMethods = {formMethods}>
        <TextField 
         name='name'
         placeholder='Name'
         validation={{required: true}} 
        /><br></br>
        <FieldError name='name' /><br></br>

        <TextField
         name='email'
         placeholder='Email'
         validation={{required: true}}
        /><br></br>
        <FieldError name='email' /><br></br>

        <TextAreaField
         name='message'
         placeholder='type here'
         validation={{required: true}}
        /><br></br>
        <FieldError name='message' /><br></br>

        <Submit disabled={loading}>Send message</Submit>
      </Form>
      
    </>
  )
}

export default ContactPage
