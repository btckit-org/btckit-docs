import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";

import {
  ArrowPathIcon,
  CheckIcon,
  CodeBracketIcon,
  GlobeAmericasIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

import CodeBlock from "@theme/CodeBlock";

import { ChevronRightIcon } from "@heroicons/react/20/solid";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div className="bg-white dark:bg-gray-600">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-orange-100/20 dark:from-slate-100/20">
          <div className="mx-auto max-w-7xl p-6 sm:p-8 md:p-12 md:pb-28 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="px-6 lg:px-0 lg:pt-4">
              <div className="mx-auto max-w-2xl">
                <div className="max-w-lg">
                  <div className="mt-8 sm:mt-10 lg:mt-4">
                    <a href="#">
                      <span className="inline-flex items-center space-x-1 rounded-full bg-orange-600/10 px-3 py-1 pl-4 text-sm font-semibold leading-6 text-orange-600 ring-1 ring-inset ring-orange-600/10 dark:text-orange-50 dark:ring-orange-300">
                        <span>Specification v0.1.0-beta</span>
                        <ChevronRightIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                  </div>
                  <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Connect your web-apps to Bitcoin
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-100">
                    A very short and readable standard designed to converge the
                    Bitcoin ecosystem. While the bulk of the standard is very
                    simple, but strict &mdash; many parts of the standard are
                    intentionally kept loose to allow for experimentation and
                    future-proofness.
                    {/* todo: shorten or move seconds sentances somewhere else */}
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                      Documentation
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900 dark:text-orange-50"
                    >
                      View on GitHub <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
              <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-orange-600/10 ring-1 ring-orange-50 dark:hidden md:-mr-20 lg:-mr-36"
                aria-hidden="true"
              />
              <div className="rounded-lg shadow-lg sm:mt-12 md:mt-28 md:rounded-3xl">
                <div className="bg-orange-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                  <div
                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-orange-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                    aria-hidden="true"
                  />
                  <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                      <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                        <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                          <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                            <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 py-2 px-4 text-white">
                              lib.ts
                            </div>
                            <div className="border-r border-gray-600/10 py-2 px-4">
                              Page.tsx
                            </div>
                          </div>
                        </div>
                        {/* todo: "no need to connect or enable, just do" */}
                        <div className="header-code">
                          <CodeBlock language="ts" showLineNumbers>
                            {`import '@btckit/types'

let addr = await window.btckit.request("getAddress", {
  index: 2
})
                          `}
                          </CodeBlock>
                        </div>
                      </div>
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:hidden dark:from-gray-800 sm:h-32" />
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    name: "Bitcoin First",
    description:
      "BtcKit is focused on Bitcoin first, while addressing interactions with L2s and similar protocols in a namespaced way.",
    icon: TrophyIcon,
  },
  {
    name: "JSON RPC 2.0",
    description:
      "The protocol is primarily based on JSON RPC 2.0, a simple, lightweight, and a well-known standard also used for Bitcoin Core.",
    icon: CodeBracketIcon,
  },
  {
    name: "Flexible & Future-Proof",
    description:
      "With a very strict core protocol, but loose individual methods, BtcKit is meant to be flexible and future-proof.",
    icon: ArrowPathIcon,
  },
  {
    name: "Backwards Compatible",
    description:
      "BtcKit is inspired by other approaches, like webbtc. We will soon release a backwards compatible implementation of the protocol.",
    icon: GlobeAmericasIcon,
  },
];

export function HomepageFeatures() {
  return (
    <div className="bg-orange-50/60 py-20 dark:bg-gray-800 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                    <feature.icon
                      className="h-6 w-6 text-white "
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-200">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

const roadmap = [
  {
    name: "Client implementation",
    description:
      "BtcKit should have a reference implementation with all basic methods included. This implementation simplify edge-cases, e.g. with multiple wallets installed.",
  },
  {
    name: "Legacy fallbacks",
    description:
      "A wrapper client could detect whether a browser wallet supports older protocols and can automatically relay to them, without stepping out of the BtcKit paradigm.",
  },
  {
    name: "Wallet Connect",
    description:
      "Technically, the defined params here could be reused for other similar protocols, which allow for JSON-compatible RPC params. BtcKit is sessionless, but the params can be reused elsewhere.",
  },
  // todo: move this to component and add link to github issues?
  {
    name: "And much more...",
    description: "",
  },
];

const HomepageRoadmap = () => {
  return (
    <div className="bg-white dark:bg-gray-600">
      <div className="bg-gradient-to-b py-16 dark:from-slate-100/20 sm:py-24">
        <div className="mx-auto max-w-7xl px-32 lg:px-48">
          <div className="mx-auto mb-28 max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600 dark:text-orange-300">
              Roadmap
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What's next for BtcKit
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-100">
              The core idea behind BtcKit has been in the works for a while.
              Now, given the increasing interest in Ordinals, it is a great time
              to release the protocol.
              <br />
              But, there is still work left to do&hellip;
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-16 gap-y-10 text-base leading-6 text-gray-600 dark:text-gray-200 sm:grid-cols-2 lg:gap-y-10">
            {roadmap.map((feature) => (
              <div key={feature.name} className="">
                <dt className="font-semibold text-gray-900 dark:text-orange-50">
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

function Cta() {
  return (
    <div className="bg-orange-50/60 py-20 dark:bg-gray-800">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Want to get started now?
          </h2>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Read the spec
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Visit Github <span aria-hidden="true">&rarr;</span>
            </a>
            {/* todo: add links */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageRoadmap />
        <Cta />
      </main>
    </Layout>
  );
}
