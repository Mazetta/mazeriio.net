import { TPost } from "src/types"
import { CONFIG } from "site.config"
import dynamic from "next/dynamic"
import GiscusComments from "src/components/GiscusComments"

type Props = {
  data: TPost
}

const CommentBox: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <GiscusComments />
    </div>
  )
}

export default CommentBox