
const UserDetail = async ({ params }: { params: Promise<{ id: string }>}) => {
    const {id} = await params
    return (
        <div>Showing detail for user #{id}</div>
    )
}

export default UserDetail