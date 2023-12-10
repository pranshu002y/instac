import React, {useEffect, useState} from 'react';

function MessageElement({children,other}) {
    // Access Key lCRj-Mv0lFa6C2e5D1KntRtPIviTnTt1en2VCePfzU8
    // Secret key a9J_ZIkF2Vn0ULK9kcgd70yasMCWePwfoJmMKzad7LY

    {console.log(children,"children")}

    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        setShowMessage(true);

    }, []);
    return (
        <div className="message-element-container">
            {children}
        
        </div>
    );
}

export default MessageElement;