import React from 'react';
import {Flex} from "antd";

function PrivacyPage() {
    return (
        <Flex vertical align="center" className="box">
            <h1>Zásady ochrany osobních údajů aplikace Moje Garáž</h1>
            <embed className="round" src="/privacy.pdf" width="800px" height="2100px" />
        </Flex>
    );
}

export default PrivacyPage;