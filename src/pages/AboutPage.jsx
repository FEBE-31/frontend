import { product, tumbnail } from '../assets'

const AboutPage = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row items-center mb-10'>
                <img src={product} alt='Ayo Bantu' />
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-10 text-main-color'>
                        What is AYO Bantu! ?
                    </h2>
                    <p className='leading-7'>
                        Ayo Bantu! is a platform from the ASEAN YOUTH
                        ORGANIZATION that can connect beneficiaries with donors
                        who aim to create a decent and hopeful life for all
                        people, especially persons with disabilities in the
                        ASEAN region. Through Ayo Bantu! aid providers don't
                        have to worry about their aid falling into the wrong
                        hands, because Ayo Bantu! will collect aid recipients
                        and validate the data, so that it is expected to produce
                        valid data.
                    </p>
                </div>
            </div>

            <div className=' flex flex-col-reverse md:flex-row md:justify-between items-center pb-28 gap-5'>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-8 text-main-color'>
                        Goals to be achieved
                    </h2>
                    <ol className='list-decimal ml-5 leading-7'>
                        <li>can match donors with the right beneficiaries</li>
                        <li>
                            Donors can more easily find potential beneficiaries
                            according to their targets
                        </li>
                        <li>
                            it is easier for prospective beneficiaries to
                            receive assistance
                        </li>
                        <li>Increasing targeted assistance</li>
                        <li> Creating a bright future in the ASEAN region</li>
                    </ol>
                </div>
                <img
                    src={tumbnail}
                    alt='tumbnail'
                    className='md:w-1/2 w-full'
                />
            </div>
        </div>
    )
}

export default AboutPage
