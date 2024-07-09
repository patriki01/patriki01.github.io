import {Flex} from "antd";

export default function ErrorPage() {
    // const error = useRouteError();
    // console.error(error);

    return (
        <Flex vertical align="center" id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </Flex>
);
}