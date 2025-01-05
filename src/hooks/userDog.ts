import axios from "axios"
import { onMounted, reactive } from "vue"

export default function () {
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_2992.jpg'
    ])

    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
    }

    onMounted(()=>{
        getDog()
    })

    return {dogList, getDog}
}