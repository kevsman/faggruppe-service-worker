export const useGetProfile = () => {
    const getMyProfile = async () => {
        await fetch('http://localhost:7174/api/getMyProfile')
    }
    return {
        getMyProfile
    }
}