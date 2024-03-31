import React from 'react';


import CustomButton from './CustomButton';


const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit22 }) => {
    return (
        <div className="aipicker-container">
            <textarea
                placeholder="fill text..."
                rows={5}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="aipicker-textarea"
            />

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
    )
}

export default AIPicker