import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import z from "zod";
import { api } from "~/utils/api";

const schema = z.object({
    email: z.string().email(),
})

const content = `
Thank you for your interest in Kepler, the ultimate Minecraft server generator and mod updater! Our waitlist is now open, and we invite you to sign up to be the first to know when Kepler is available.`

export default function Home() {

    const emailMutation = api.email.postEmail.useMutation()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data) => {
        emailMutation.mutate({ email: data.email })
    }

    return (
        <section className="relative flex flex-wrap lg:h-screen">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Be the first to use Kelper!</h1>
                    <p className="mt-4 text-gray-500">
                        {content}
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                {...register("email")}
                            />
                            <p>{errors.root?.message}</p>

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Join The Waitlist
                        </button>
                    </div>
                </form>
            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="883.70798" height="724.22538" viewBox="0 0 883.70798 724.22538" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M815.4375,655.50781H541.437a16.519,16.519,0,0,1-16.5-16.5V442.00732a16.51868,16.51868,0,0,1,16.5-16.5H815.4375a16.519,16.519,0,0,1,16.5,16.5V639.00781A16.51929,16.51929,0,0,1,815.4375,655.50781Z" transform="translate(-157.896 -87.88731)" fill="#e6e6e6" /><path d="M546.50182,642.35455h263.8706a8,8,0,0,0,8-8V446.66021a8,8,0,0,0-8-8H546.50182a8,8,0,0,0-8,8V634.35455A8,8,0,0,0,546.50182,642.35455Z" transform="translate(-157.896 -87.88731)" fill="#fff" /><path d="M448.396,391.03223h-274a16.51867,16.51867,0,0,1-16.5-16.5v-197a16.51866,16.51866,0,0,1,16.5-16.5h274a16.51867,16.51867,0,0,1,16.5,16.5v197A16.51868,16.51868,0,0,1,448.396,391.03223Z" transform="translate(-157.896 -87.88731)" fill="#e6e6e6" /><path d="M179.46072,377.87933H443.33133a8,8,0,0,0,8-8V182.185a8,8,0,0,0-8-8H179.46072a8,8,0,0,0-8,8V369.87933A8,8,0,0,0,179.46072,377.87933Z" transform="translate(-157.896 -87.88731)" fill="#fff" /><path d="M778.91936,496.98053H610.36852a6.01968,6.01968,0,1,0,0,12.03936H778.91936a6.01968,6.01968,0,0,0,0-12.03936Z" transform="translate(-157.896 -87.88731)" fill="#e6e6e6" /><path d="M610.36852,534.02466a6.01968,6.01968,0,1,0,0,12.03936H778.91936a6.01968,6.01968,0,0,0,0-12.03936Z" transform="translate(-157.896 -87.88731)" fill="#e6e6e6" /><path d="M610.36852,571.06885a6.01968,6.01968,0,1,0,0,12.03936H778.91936a6.01968,6.01968,0,0,0,0-12.03936Z" transform="translate(-157.896 -87.88731)" fill="#e6e6e6" /><circle cx="420.52193" cy="415.57596" r="7.40884" fill="#42bcc3" /><circle cx="420.52193" cy="452.62009" r="7.40884" fill="#e6e6e6" /><circle cx="420.52193" cy="489.66422" r="7.40884" fill="#e6e6e6" /><path d="M711.77684,503.00018h0a6.01961,6.01961,0,0,1-6.01965,6.01965H610.58538a6.167,6.167,0,0,1-6.18439-5.21972,6.03031,6.03031,0,0,1,5.96753-6.81964h95.38867a6.01966,6.01966,0,0,1,6.01965,6.01965Z" transform="translate(-157.896 -87.88731)" fill="#42bcc3" /><circle cx="520.54113" cy="288.23669" r="24.07867" fill="#e6e6e6" /><circle cx="678.43713" cy="376.12401" r="12.03934" transform="translate(40.60032 897.66513) rotate(-80.78253)" fill="#fff" /><path d="M198.9668,270.31231a5.96564,5.96564,0,1,0,0,11.93128H423.82524a5.96564,5.96564,0,1,0,0-11.93128Z" transform="translate(-157.896 -87.88731)" fill="#e6e6e6" /><path d="M198.9668,307.02389a5.96564,5.96564,0,1,0,0,11.93128H423.82524a5.96564,5.96564,0,0,0,0-11.93128Z" transform="translate(-157.896 -87.88731)" fill="#e6e6e6" /><path d="M299.46477,345.57107a5.96564,5.96564,0,0,0,0,11.93128h23.86249a5.96564,5.96564,0,0,0,0-11.93128Z" transform="translate(-157.896 -87.88731)" fill="#42bcc3" /><path d="M279.42037,194.562a1.83739,1.83739,0,0,0-1.83557,1.83557v46.59619a1.83739,1.83739,0,0,0,1.83557,1.83557h63.95129a1.83739,1.83739,0,0,0,1.83557-1.83557V196.39755a1.83739,1.83739,0,0,0-1.83557-1.83557Z" transform="translate(-157.896 -87.88731)" fill="#42bcc3" /><circle cx="153.50003" cy="126.65496" r="10.09569" fill="#fff" /><path d="M327.91625,240.24038a10.01783,10.01783,0,0,1-1.10135,4.589H295.97716a10.09444,10.09444,0,0,1,8.99432-14.68463h12.84906A10.09,10.09,0,0,1,327.91625,240.229Z" transform="translate(-157.896 -87.88731)" fill="#fff" /><circle cx="153.50003" cy="126.65496" r="10.09569" fill="#fff" /><path d="M327.91625,240.24038a10.01783,10.01783,0,0,1-1.10135,4.589H295.97716a10.09444,10.09444,0,0,1,8.99432-14.68463h12.84906A10.09,10.09,0,0,1,327.91625,240.229Z" transform="translate(-157.896 -87.88731)" fill="#fff" /><circle cx="153.50003" cy="23.86253" r="23.86253" fill="#e6e6e6" /><circle cx="153.50003" cy="23.86253" r="11.93126" fill="#42bcc3" /><polygon points="748.119 711.24 736.687 711.239 731.25 667.143 748.123 667.145 748.119 711.24" fill="#ffb8b8" /><path d="M728.52095,707.97276h22.04782a0,0,0,0,1,0,0v13.88195a0,0,0,0,1,0,0H714.639a0,0,0,0,1,0,0v0A13.88193,13.88193,0,0,1,728.52095,707.97276Z" fill="#2f2e41" /><polygon points="809.741 711.24 798.308 711.239 792.872 667.143 809.745 667.145 809.741 711.24" fill="#ffb8b8" /><path d="M790.14219,707.97276H812.19a0,0,0,0,1,0,0v13.88195a0,0,0,0,1,0,0H776.26026a0,0,0,0,1,0,0v0A13.88193,13.88193,0,0,1,790.14219,707.97276Z" fill="#2f2e41" /><circle cx="776.25964" cy="373.20424" r="24.56103" fill="#ffb8b8" /><path d="M850.17313,621.26961a9.377,9.377,0,0,1,12.09227-7.77928l13.72625-16.45445,12.03377,5.9026-19.71048,22.96461a9.42779,9.42779,0,0,1-18.14181-4.63348Z" transform="translate(-157.896 -87.88731)" fill="#ffb8b8" /><path d="M968.30684,637.91125a9.37694,9.37694,0,0,1,6.03109-13.05243l2.75577-21.25,13.322-1.47493-4.31317,29.95453a9.42778,9.42778,0,0,1-17.79574,5.82288Z" transform="translate(-157.896 -87.88731)" fill="#ffb8b8" /><path d="M954.68163,507.48222l0,0a12.08366,12.08366,0,0,1,20.75013,2.93029l20.13136,50.24026a31.21152,31.21152,0,0,1,1.90082,16.1937l-6.5574,44.15842a4,4,0,0,1-5.13083,3.23622l-8.63923-2.653a4,4,0,0,1-2.79855-4.28974l0,0a145.305,145.305,0,0,0-11.66387-76.2314l-9.49042-21.22808A12.08366,12.08366,0,0,1,954.68163,507.48222Z" transform="translate(-157.896 -87.88731)" fill="#42bcc3" /><path d="M940.13582,485.65159a26.205,26.205,0,1,0-4.91018-51.82531c-5.40118-3.27952-11.6809-5.48627-17.97478-4.925s-12.51835,4.29789-14.87192,10.16208.17487,13.59411,6.02708,15.97731c3.75184,1.52786,7.98866.78691,11.99255.1708s8.37171-1.01818,11.85635,1.04773,5.05106,7.60548,1.93025,10.18835a10.73849,10.73849,0,0,0-3.0842,11.82028C932.66943,482.32412,936.95033,485.58277,940.13582,485.65159Z" transform="translate(-157.896 -87.88731)" fill="#2f2e41" /><path d="M970.60872,620.29851l4.35677,165.33965a4,4,0,0,1-4.20243,4.10017l-14.35213-.73225a4,4,0,0,1-3.74658-3.36683L935.59326,678.25019a2,2,0,0,0-3.92705-.12223l-23.10757,103.3966a4,4,0,0,1-5.24374,2.89644l-14.24375-.87a4,4,0,0,1-2.64985-4.05305l12.434-160.76415Z" transform="translate(-157.896 -87.88731)" fill="#2f2e41" /><path d="M977.60063,541.76779c2.403-25.05536-16.01923-47.71792-41.12634-49.5007-10.81772-.76813-27.61219-1.04272-33.14841,13.13649-16.6774,42.71374,12.51774,41.67582,2.45885,78.68291s-18.94295,39.128-5.14122,41.8003,75.86672,18.447,73.31817-7.60005C972.39515,602.27619,975.20367,566.76061,977.60063,541.76779Z" transform="translate(-157.896 -87.88731)" fill="#42bcc3" /><path d="M906.27914,501.059l0,0a12.08365,12.08365,0,0,1,16.29393,13.17809l-7.8391,48.991a47.876,47.876,0,0,1-10.26518,22.80676L879.00934,617.059a4,4,0,0,1-6.06459.13914l-6.04745-6.71587a4,4,0,0,1-.196-5.11814l1.7811-2.31141a134.70322,134.70322,0,0,0,27.04466-66.179l3.11643-25.98472A12.08364,12.08364,0,0,1,906.27914,501.059Z" transform="translate(-157.896 -87.88731)" fill="#42bcc3" /><path d="M1040.604,812.11269h-258a1,1,0,0,1,0-2h258a1,1,0,0,1,0,2Z" transform="translate(-157.896 -87.88731)" fill="#ccc" /></svg>
            </div>
        </section>
    )
}
