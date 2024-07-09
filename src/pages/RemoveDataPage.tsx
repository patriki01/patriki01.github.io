import React from 'react';
import {Flex, Typography} from "antd";

const {Text, Paragraph} = Typography;
function RemoveDataPage() {
    return (
        <Flex vertical align="center"  className="box">
            <Text style={{fontSize: "2rem"}}>Žádost o výmaz uživatelských dat z aplikace Moje Garáž</Text>
            <Paragraph>
                Pokud máte zájem o smazání uživatelského účtu, postupujte podle následujících instrukcí:
            </Paragraph>
            <ol>
                <li>Smažte všechna vozidla v aplikaci.</li>
                <li>Napište na mail <Text strong={true}>patriki01@centrum.cz</Text> žádost o smazání účtu.</li>
            </ol>
        </Flex>
    );
}

export default RemoveDataPage;