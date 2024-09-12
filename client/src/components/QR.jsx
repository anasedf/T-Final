import React from 'react';
import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit22 }) => {
    // Function to handle changes in any input field
    const handleInputChange = (index, value) => {
        // Make a copy of the current prompt array
        const newPrompt = [...prompt];
        // Update the value at the specified index
        newPrompt[index] = value;
        // Set the new prompt state
        setPrompt(newPrompt);
    };

    return (
        <div className="qrpicker-container">
            <div className="flex-1 flex flex-col">
                <label>First Name:</label>
                <input
                    type="text"
                    placeholder="First name"
                    value={prompt[0]}  // Use the first element of the prompt array
                    onChange={(e) => handleInputChange(0, e.target.value)}  // Handle changes for the first input
                    className="aipicker-input"
                />
            </div>
            
            <div className="flex-1 flex flex-col">
                <label>Last Name:</label>
                <input
                    type="text"
                    placeholder="lastname"
                    value={prompt[1]}  // Use the second element of the prompt array
                    onChange={(e) => handleInputChange(1, e.target.value)}  // Handle changes for the second input
                    className="aipicker-input"
                />
            </div>

            <div className="flex-1 flex flex-col">
                <label>Address:</label>
                <input
                    type="text"
                    placeholder="address"
                    value={prompt[2]}  // Use the third element of the prompt array
                    onChange={(e) => handleInputChange(2, e.target.value)}  // Handle changes for the third input
                    className="aipicker-input"
                />
            </div>

            <div className="flex-1 flex flex-col">
                <label>MobilePhone:</label>
                <input
                    type="text"
                    placeholder="mobilphone"
                    value={prompt[3]}  // Use the third element of the prompt array
                    onChange={(e) => handleInputChange(3, e.target.value)}  // Handle changes for the third input
                    className="aipicker-input"
                />
            </div>
            

      

            <div className="flex flex-wrap gap-3">
                {generatingImg ? (
                    <CustomButton
                        type="outline"
                        title="Generating..."
                        customStyles="text-xs"
                    />
                ) : (
                    <>
                        <CustomButton
                            type="outline"
                            title="Qr logo"
                            handleClick={() => handleSubmit22('logo')}
                            customStyles="text-xs"
                        />
                        {/* <CustomButton
                            type="filled"
                            title="AI Full"
                            handleClick={() => handleSubmit22('full')}
                            customStyles="text-xs"
                        /> */}
                    </>
                )}
            </div>
        </div>
    );
};

export default AIPicker;
