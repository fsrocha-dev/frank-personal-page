import mediumJSONFeed from 'medium-json-feed'

export default function handler(_, res) {
  mediumJSONFeed(`@${process.env.userName.medium}`)
    .then(data => res.status(200).json(data.response))
    .catch(data => res.status(500).json({ error: "Houve um problema ao pegar post no medium" }))
}
