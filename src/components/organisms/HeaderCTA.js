import Button from "../atoms/Button"
import Flex from "../atoms/Flex"
import Header from "../atoms/Header"

const HeaderCTA = () => {

    return (
      // TODO: Connect data to CMS. Add padding/margins to styles
      <Flex styles="justify-center items-center m-auto p-5 bg-white bg-opacity-30 rounded-xl">
        <Header text="Parallax Section" size="1" />
        <Header text="Add some content here as a sub-header!" size="3" />
        <Button text="Learn More" type="secondaryBtn" />
      </Flex>
    )

};

export default HeaderCTA;