import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import styles from './index.module.scss'

function HomepageHeader() {

	const {siteConfig} = useDocusaurusContext()

	return (
	  <header className={clsx('', styles.heroBanner)}>
		<div className="container">
		
			<img className={styles.logo} src="img/tscord-template-icon.png" alt="Logo TSCord Template" />
			<h1 className="hero__title">{siteConfig.title}</h1>
			<p className="hero__subtitle">{siteConfig.tagline}</p>

			<div className={styles.buttons}>
				<Link
					className="button button--secondary button--lg"
					to="/docs/intro"
				>
					Documentation
				</Link>
			</div>
		</div>
	  </header>
	)
}

export default function Home(): JSX.Element {

	const {siteConfig} = useDocusaurusContext()

	return (
		<Layout
			title={`${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<HomepageHeader />
			<main>
			</main>
		</Layout>
	);
}