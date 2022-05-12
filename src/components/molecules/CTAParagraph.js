import Button from "../atoms/Button"
import Header from "../atoms/Header"
import Paragraph from "../atoms/Paragraph"
import Flex from "../atoms/Flex"


const CTAParagraph = ({ 
  // TODO: define props in parent from CMS (Featured.js) and remove default values
  header = 'I am a header', 
  paragraph = ' Say something about a promotion or featured item. Say something about a promotion or featured item. Say something about a promotion or featured item. Say something about a promotion or featured item. Say something about a promotion or featured item.Say something about a promotion or featured item. ', 
  primaryBtn = 'Label', 
  secondaryBtn = 'Label'}) => {

  return (
    <Flex>
      <Header text={header} size="3" />
      <Paragraph text={paragraph} />
      <div>
        <Button text={primaryBtn} type="primaryBtn" />
        <Button text={secondaryBtn} type="secondaryBtn" />
      </div>
    </Flex>
  )
};

export default CTAParagraph;
