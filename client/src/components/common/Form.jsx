import { Input} from '../ui/input.tsx';
import { Label} from '../ui/label';
import {Select, SelectItem, SelectTrigger, SelectValue} from '../ui/select';
import {Textarea} from "../ui/textarea.tsx"
import {Button} from "../ui/button.tsx"


const type ={
   INPUT:'input',
   SELECT:'select'
}

function CommonForm({ formControls, formData , setFormData, onSubmit, buttonText}) {


  function renderInputsByComponentsType(getControlItem) {
    let element = null;
      const value = formData[getControlItem.name] || ''


    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={event => setFormData({
                ...formData,
                [getControlItem.name]: event.tergrt.Value 
            
            })}
          />
        );
        break;
      case "select":
        element = (
         <Select onValueChange={(value)=>setFormData({
            ...formData , [getControlItem.name]:value
         })}
         value={value}>
           <SelectTrigger className="w-full">
            <SelectValue placeholder={getControlItem.placeholder}/>

           </SelectTrigger>
           <SelcetContent>
            {
                getControlItem.options && getControlItem.options.length >0 ?
                getControlItem.options.map(optionItem=> <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>) :null
                

            }
           </SelcetContent>
         </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea 
          name={getControlItem.name}
          placeholder={getControlItem.placeholder}
          id={getControlItem.id}
          value={value}
          onChange={event => setFormData({
            ...formData,
            [getControlItem.name]: event.tergrt.Value 
        
        })}
          />
        );
        break;

      default:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            onChange={event => setFormData({
                ...formData,
                [getControlItem.name]: event.tergrt.Value 
            
            })}
          />
        );
        break;
    }
    return element;
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 ">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5 " key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputsByComponentsType(controlItem)}
          </div>
        ))}
      </div>
      <Button type= "submit"className="mt-8 w-full rounded-xl">{buttonText || 'Submit'}</Button>
    </form>
  );
}

export default CommonForm;
