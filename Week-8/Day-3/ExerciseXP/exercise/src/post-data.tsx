import data from './post-data.json'

export function PostData() {
    return (
        <>
            {data.map((element) =>
                <div key={element.id}>
                    <h2>{element.title}</h2>
                    <p>{element.content}</p>
                </div>
            )}
        </>
    )
}