import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

function CallToAction() {

return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Upgrade Your Style?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse our complete collection and find the perfect shoes for every occasion.
          </p>
          <Link 
            to="/items" 
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform "
          >
            Explore Collection
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
)

}

export default CallToAction