import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

function spanify(text: string) {
	return text.split("").map((char, i) => (
		<span key={i} className="letter" style={{ animationDelay: `${i * 0.2}s` }}>
			{char === " " ? "\u00A0" : char}
		</span>
	));
}

function Footer() {
    return (
        <footer>
            <div className="social">
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="mailto:example@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
            </div>
            <div className="credits">
                <p>
					{spanify("© 2025 THRIFTED by MARFA")}
				</p>
                <p>
					{spanify("All rights reserved")}
				</p>
            </div>
        </footer>
    );
}

export default Footer;