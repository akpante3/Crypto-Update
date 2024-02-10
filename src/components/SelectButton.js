import { styled } from "@mui/system";

const SelectButton = ({ children, selected, onClick }) => {

    const Button = styled("div")(({ theme }) => ({
        border: "1px solid #0d8cf1",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor:  "#0d8cf1",
        // color: selected ? "black" : "",
        // fontWeight: selected ? 700 : 500,
        "&:hover": {
          backgroundColor: "#0d8cf1",
          color: "black",
        },
        width: "22%",
        //   margin: 5,
      }));

  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
};

export default SelectButton;