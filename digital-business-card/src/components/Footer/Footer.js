import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <ul className="social-links">
                <li><a href="https://twitter.com/deborahsalves" target="_blank" title="Déborah Salves's Twitter feed"><i class="lni lni-twitter-original"></i></a></li>
                <li><a href="https://twitter.com/deborahsalves" target="_blank" title="Try Twitter"><i class="lni lni-facebook-filled"></i></a></li>
                <li><a href="https://twitter.com/deborahsalves" target="_blank" title="Try Twitter once more"><i class="lni lni-instagram-original"></i></a></li>
                <li><a href="https://github.com/deborahsalves" target="_blank" title="Déborah Salves's GitHub feed"><i class="lni lni-github-original"></i></a></li>
            </ul>
        </footer>
    )
}