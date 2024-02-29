import { useState } from 'react';
import { Switch, Input, Radio, RadioChangeEvent, Checkbox, Button } from 'antd';
import FloatLabel from './FloatingLabel';
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

enum Tool {
    Redux = "0",
    Lodash = "1",
    AntDesign = "2",
    Webpack = "3",
    Other = "4",
}

function Page() {
    const [firstName, setFirstName] = useState('');
    const [editable, setEditable] = useState(false);
    const [isProficient, setProficient] = useState(null);
    const [toolsUsed, setToolsUsed] = useState("");

    const toggleEditable = () => {
        setEditable(!editable);
    };

    const changeProficientReact = (e: RadioChangeEvent) => {
        setProficient(e.target.value);
    };

    const toolOptions = Object.entries(Tool).map(([key, value]) => ({
        label: key,
        value,
      }));
    console.log(toolsUsed)
    const checkboxChange = (e: any) => {
        const value = e.target.value;
        const checked = e.target.checked;
        const currentTools = toolsUsed.split(",").filter(t => t); 
      
        if (checked && !currentTools.includes(value)) {
          setToolsUsed([...currentTools, value].join(","));
        } else if (!checked && currentTools.includes(value)) {
          setToolsUsed(currentTools.filter(t => t !== value).join(","));
        }
      };

    const radioStyle = {
        display: 'flex',
        height: '30px',
        alignItems: 'center',
        fontSize: '16px',
      };

    return (
        <div className="font-custom flex flex-col justify-center items-center min-h-screen w-full bg-gray-200">
        <div className='flex flex-col gap-[20px] px-[32px] py-[32px] w-[380px] h-[650px] bg-white rounded-lg'>
            <div className='flex justify-between w-full'>
            <p>Editable</p>
                <Switch onChange={toggleEditable} />
            </div>
            
            <FloatLabel label="First Name" value={firstName} disabled={!editable}>
                <Input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    size="large"
                    disabled={!editable}
                />
            </FloatLabel>
            <div className='reactProficiency'>
                <p className='text-[18px] font-bold mb-[8px]'>Are you proficient in ReactJS development?</p>
                    <RadioGroup onChange={changeProficientReact} value={isProficient} disabled={!editable}>
                        <Radio className='mb-[8px]' style={{ ...radioStyle, color: isProficient === false ? '#979797' : '' }} value={false}>No</Radio>
                        <Radio style={{ ...radioStyle, color: isProficient === true ? '#979797' : '' }} value={true}>Yes</Radio>
                    </RadioGroup>
            </div>
            <div className='toolsSelection'>
                <p className='text-[18px] font-bold'>Which tools do you use?</p>
                <p className='text-[16px] text-gray-400 mb-[8px]'>Please select all that apply.</p>
                <div className='flex flex-col'>
                <CheckboxGroup className='w-full flex flex-col' disabled={!editable}>
                    {toolOptions.map(({ label, value }) => (
                        <Checkbox
                        className="text-[16px] mb-[8px]"
                        key={value}
                        value={value}
                        checked={toolsUsed.split(",").includes(value)}
                        onChange={checkboxChange}
                        >
                        {label}
                        </Checkbox>
                    ))}
                </CheckboxGroup>
                </div>
            </div>
            <Button className="mt-[20px] self-center w-[200px] h-[57px] bg-[#6B47ED] rounded-full text-white text-[18px]" 
                shape='round' 
                size='large'
                htmlType="submit"
                disabled={!editable}
            >
                Process
            </Button>
        </div>
        </div>
    );
}


export default Page;

