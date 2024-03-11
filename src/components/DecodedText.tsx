type props = {
    encodedText: string
}
export const DecodedText = ({ encodedText }: props) => {
  return <div dangerouslySetInnerHTML={{ __html: encodedText }} />;
}
