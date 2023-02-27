import './Cards.css'

import Hart2HeartGoodiesLogo from '../assets/hart-2-heart-goodies-logo.jpeg'
import KosmicVeganMarketplaceLogo from '../assets/KOSMIC-VEGAN-MARKETPLACE-logo.jpeg'
import UpBy10Logo from '../assets/up-by-20-logo.png'
import MarksOutingLogo from '../assets/mark’s-outing.png'
import CozyCakes from '../assets/cozy-cakes-logo.png'
import SweetertheJuiceCharcoalLemonadeLogo from '../assets/sweeter-the-juice-charcoal-lemonade.png'
import BlkommLogo from '../assets/blkomm-logo.png'
import BrunchBoss from '../assets/brunch-boss.png'
import JustDogsLogo from '../assets/just-dogs-7.jpg'
import KrsphotographyLogo from '../assets/krsphotography-logo.png'

function Cards() {
    return (
        <div className='card-layout'>
            <div className='card'>
                <img className='card-img' src={Hart2HeartGoodiesLogo}/>
                <div className='card-info'>
                    <div className='btn-section'>
                        <h3>Hart 2 Heart Goodies</h3>
                        <p className='ft-category-tag'>Food Truck</p>
                    </div>
                    <a href='https://blkomm.com/listing/texas/-/hart-2-goodies/'>
                            <button>Veiw Website</button>
                    </a>
                </div>
            </div>
            <div className='card'>
            <img className='card-img' src={KosmicVeganMarketplaceLogo}/>
                <div className='card-info'>
                    <div className='btn-section'>
                        <h3>Komic Vegan Marketplace</h3>
                        <p className='a-category-tag'>Accessories</p>
                    </div>
                    <a href='https://blkomm.com/listing/texas/-/kosmic-vegan-marketplace/'>
                         <button>Veiw Website</button>
                    </a>
                </div>
            </div>
            <div className='card'>
            <img className='card-img' src={UpBy10Logo}/>
                <div className='card-info'>
                    <div className='btn-section'> 
                        <h3>UpBy10</h3>
                        <p className='c-category-tag'>Clothing</p>
                    </div>
                    <a href='https://upby10.com/'>
                        <button>Veiw Website</button>
                    </a>
                </div>
            </div>
            <div className='card'>
                <img className='card-img' src={MarksOutingLogo}/>
                <div className='card-info'>
                    <div className='btn-section'>
                        <h3>Mark’s Outing</h3>
                        <p className='r-category-tag'>Restaurant</p>
                    </div>
                    <a href='https://marksouting.com/'>
                        <button>Veiw Website</button>
                    </a>
                </div>
            </div>
            <div className='card'>
                <img className='card-img' src={SweetertheJuiceCharcoalLemonadeLogo}/>
                <div className='card-info'>
                    <div className='btn-section'>
                        <h3>Sweeter the Juice Charcoal Lemonade</h3>
                        <p className='tb-category-tag'>Treats/Bakery</p>
                    </div>
                    <a href='https://www.sweeterthejuice.net/'>
                        <button className='website-btn'>Veiw Website</button>
                    </a>
                </div>
            </div>
            <div className='card'>
                <img className='card-img' src={CozyCakes}/>
                <div className='card-info'>
                    <div className='btn-section'>
                        <h3>Cozy Cakes</h3>
                        <p className='tb-category-tag'>Treats/Bakery</p>
                    </div>
                    <a href='https://shop.bakesy.app/b/cozy-cakes-by-lexus'>
                        <button>Veiw Website</button>
                    </a>
                </div>
            </div>
            <div className='card'>
                <img className='card-img' src={BrunchBoss}/>
                <div className='card-info'>
                    <div className='btn-section'>
                        <h3>Brunch Boss</h3>
                        <p className='ecp-category-tag'>Event Coordinator/Planner</p>
                    </div>
                    <a href='https://www.brunchbosstx.com/'>
                        <button>Veiw Website</button>
                    </a>
                </div>
            </div>
            <div className='card'>
                <img className='card-img' src={JustDogsLogo}/>
                <div className='card-info'>
                    <div className='btn-section'>
                        <h3>Just Dogs 34</h3>
                        <p className='ft-category-tag'>Food Truck</p>
                    </div>
                    <a href='https://blkomm.com/listing/texas/-/just-dogs-34/'>
                        <button>Veiw Website</button>
                    </a>
                </div>
            </div>
            <div className='card'>
                <img className='card-img' src={BlkommLogo}/>
                <div className='card-info'>
                    <div className='btn-section'>
                    <h3>Black-Owned Market Movement</h3>
                        <p className='am-category-tag'>Advertisement/Marketing</p>
                    </div>
                    <a href='https://blkomm.com/'>
                        <button className='website-btn'>Veiw Website</button>
                    </a>
                </div>
            </div>
            <div className='card'>
                <img className='card-img' src={KrsphotographyLogo}/>
                <div className='card-info'>
                    <div className='btn-section'>
                        <h3>KRSphotography_</h3>
                        <p className='pgd-category-tag'>Photography/Graphic Design</p>
                    </div>
                    <a href='https://www.officialkrsphotography.com/'>
                        <button>Veiw Website</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Cards