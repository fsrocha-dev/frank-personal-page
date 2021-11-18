import Image from 'next/image'

export default function Bio() {
  return (
    <>
      <div className="bio-box">
        <div className="bio-text">
          <h2>Frank Rocha</h2>
          <p>
            FullStack developer (Educator at Betrybe / Love JS, Node and PHP)
          </p>
        </div>
        <div className="bio-photo">
          <Image
            // width={100}
            // height={100}
            layout={'fill'}
            // objectFit="contain"
            // objectPosition="center"
            src="/static/images/iam-min.jpeg"
            alt="Bio image"
          />
        </div>
      </div>
      <div className="command-box">
        <button className="btn-primary command-btn">
          Press <kbd className="tag-btn-key">⌘</kbd>{' '}
          <kbd className="tag-btn-key">K</kbd> to start →
        </button>
      </div>
    </>
  )
}
