import React from "react";
import CopyToClipboard from "./CopyToClipboard";
import CodeBlock from "react-highlight-codeblock";
function SideBarMarkedQueryTab(props) {
    if (
        typeof props.queryMark !== "undefined" &&
        typeof props.email !== "undefined"
    ) {
        return (
            <ol className="markedQuery">
                {props.queryMark.map((result, i) => (
                    <div>
                        {result.developerEmail === props.email ? (
                            <div>
                                <CodeBlock
                                    code={result.markedQuery}
                                    editer={true}
                                    language="javascript"
                                    showLineNumbers={false}
                                    style="github"
                                />
                                <br></br>
                            </div>
                        ) : null}
                    </div>
                ))}
            </ol>
        );
    } else {
        return null;
    }
}

export default SideBarMarkedQueryTab;
