import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import styles from "./Forms.module.scss"
import GripDots from "../../../components/GripDots";
import Form from "../../../components/Form";
import FormItem from "../../../components/FormItem";
const Forms = () => (
    <div className="forms">
        <Form title="Education">
            <FormItem title="Stanford Univesity" />           
        </Form>

        <Form title="Education">
            <FormItem title="Stanford Univesity" />           
            <FormItem title="Stanford Univesity" />           
            <FormItem title="Stanford Univesity" />           
            <FormItem title="Stanford Univesity" />           
        </Form>

        
    </div>
);

export default Forms;
