import { ImageResponse, NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'
export const revalidate = 60

export async function GET(req: NextRequest) {
  const cover = new URL(req.url).searchParams.get('cover')
  if (!cover) {
    return NextResponse.error()
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
        }}
      >
        <svg
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
          width="1200"
          height="66"
          viewBox="0 0 1200 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.25">
            <rect
              x="5.07056"
              y="9.48535"
              width="6.09758"
              height="56.9107"
              rx="3.04879"
              fill="url(#paint0_linear_408_133)"
            />
            <rect
              x="16.5883"
              width="6.09758"
              height="66.3958"
              rx="3.04879"
              fill="url(#paint1_linear_408_133)"
            />
            <rect
              x="28.1059"
              y="16.2607"
              width="6.09758"
              height="50.1356"
              rx="3.04879"
              fill="url(#paint2_linear_408_133)"
            />
            <rect
              x="39.6235"
              y="6.77539"
              width="6.09758"
              height="59.6208"
              rx="3.04879"
              fill="url(#paint3_linear_408_133)"
            />
            <rect
              x="51.1412"
              y="23.7129"
              width="6.09758"
              height="42.683"
              rx="3.04879"
              fill="url(#paint4_linear_408_133)"
            />
            <rect
              x="62.6588"
              y="3.38818"
              width="6.09758"
              height="63.0083"
              rx="3.04879"
              fill="url(#paint5_linear_408_133)"
            />
            <rect
              x="74.1765"
              y="37.9409"
              width="6.09758"
              height="28.4554"
              rx="3.04879"
              fill="url(#paint6_linear_408_133)"
            />
            <rect
              x="85.6941"
              y="9.48535"
              width="6.09758"
              height="56.9107"
              rx="3.04879"
              fill="url(#paint7_linear_408_133)"
            />
            <rect
              x="97.2117"
              y="18.293"
              width="6.09758"
              height="48.1031"
              rx="3.04879"
              fill="url(#paint8_linear_408_133)"
            />
            <rect
              x="108.729"
              y="6.77539"
              width="6.09758"
              height="59.6208"
              rx="3.04879"
              fill="url(#paint9_linear_408_133)"
            />
            <rect
              x="120.247"
              y="23.7129"
              width="6.09758"
              height="42.683"
              rx="3.04879"
              fill="url(#paint10_linear_408_133)"
            />
            <rect
              x="131.765"
              y="9.48535"
              width="6.09758"
              height="56.9107"
              rx="3.04879"
              fill="url(#paint11_linear_408_133)"
            />
            <rect
              x="143.282"
              width="6.09758"
              height="66.3958"
              rx="3.04879"
              fill="url(#paint12_linear_408_133)"
            />
            <rect
              x="154.8"
              y="3.38818"
              width="6.09758"
              height="63.0083"
              rx="3.04879"
              fill="url(#paint13_linear_408_133)"
            />
            <rect
              x="166.318"
              y="12.8726"
              width="6.09758"
              height="53.5232"
              rx="3.04879"
              fill="url(#paint14_linear_408_133)"
            />
            <rect
              x="177.835"
              y="35.9087"
              width="6.09758"
              height="30.4879"
              rx="3.04879"
              fill="url(#paint15_linear_408_133)"
            />
            <rect
              x="189.353"
              y="16.2607"
              width="6.09758"
              height="50.1356"
              rx="3.04879"
              fill="url(#paint16_linear_408_133)"
            />
            <rect
              x="200.871"
              y="29.8105"
              width="6.09758"
              height="36.5855"
              rx="3.04879"
              fill="url(#paint17_linear_408_133)"
            />
            <rect
              x="212.388"
              y="9.48535"
              width="6.09758"
              height="56.9107"
              rx="3.04879"
              fill="url(#paint18_linear_408_133)"
            />
            <rect
              x="223.906"
              y="21.6807"
              width="6.09758"
              height="44.7156"
              rx="3.04879"
              fill="url(#paint19_linear_408_133)"
            />
            <rect
              x="235.423"
              y="6.77539"
              width="6.09758"
              height="59.6208"
              rx="3.04879"
              fill="url(#paint20_linear_408_133)"
            />
            <rect
              x="246.941"
              y="18.293"
              width="6.09758"
              height="48.1031"
              rx="3.04879"
              fill="url(#paint21_linear_408_133)"
            />
            <rect
              x="258.459"
              y="35.9087"
              width="6.09758"
              height="30.4879"
              rx="3.04879"
              fill="url(#paint22_linear_408_133)"
            />
            <rect
              x="269.976"
              y="12.8726"
              width="6.09758"
              height="53.5232"
              rx="3.04879"
              fill="url(#paint23_linear_408_133)"
            />
            <rect
              x="281.494"
              y="21.6807"
              width="6.09758"
              height="44.7156"
              rx="3.04879"
              fill="url(#paint24_linear_408_133)"
            />
            <rect
              x="293.012"
              y="6.77539"
              width="6.09758"
              height="59.6208"
              rx="3.04879"
              fill="url(#paint25_linear_408_133)"
            />
            <rect
              x="304.529"
              width="6.09758"
              height="66.3958"
              rx="3.04879"
              fill="url(#paint26_linear_408_133)"
            />
            <rect
              x="316.047"
              y="9.48535"
              width="6.09758"
              height="56.9107"
              rx="3.04879"
              fill="url(#paint27_linear_408_133)"
            />
            <rect
              x="327.565"
              y="16.2607"
              width="6.09758"
              height="50.1356"
              rx="3.04879"
              fill="url(#paint28_linear_408_133)"
            />
            <rect
              x="339.082"
              y="26.4233"
              width="6.09758"
              height="39.973"
              rx="3.04879"
              fill="url(#paint29_linear_408_133)"
            />
            <rect
              x="350.6"
              y="12.8726"
              width="6.09758"
              height="53.5232"
              rx="3.04879"
              fill="url(#paint30_linear_408_133)"
            />
            <rect
              x="362.117"
              width="6.09758"
              height="66.3958"
              rx="3.04879"
              fill="url(#paint31_linear_408_133)"
            />
            <rect
              x="373.635"
              width="6.09758"
              height="66.3958"
              rx="3.04879"
              fill="url(#paint32_linear_408_133)"
            />
            <rect
              x="385.153"
              y="6.77539"
              width="6.09758"
              height="59.6208"
              rx="3.04879"
              fill="url(#paint33_linear_408_133)"
            />
            <rect
              x="396.671"
              y="16.2607"
              width="6.09758"
              height="50.1356"
              rx="3.04879"
              fill="url(#paint34_linear_408_133)"
            />
            <rect
              x="408.188"
              y="37.9409"
              width="6.09758"
              height="28.4554"
              rx="3.04879"
              fill="url(#paint35_linear_408_133)"
            />
            <rect
              x="419.286"
              y="12.8726"
              width="6.09758"
              height="53.5232"
              rx="3.04879"
              fill="url(#paint36_linear_408_133)"
            />
            <rect
              x="430.803"
              y="35.9087"
              width="6.09758"
              height="30.4879"
              rx="3.04879"
              fill="url(#paint37_linear_408_133)"
            />
            <rect
              x="442.321"
              y="18.293"
              width="6.09758"
              height="48.1031"
              rx="3.04879"
              fill="url(#paint38_linear_408_133)"
            />
            <rect
              x="453.839"
              y="29.8105"
              width="6.09758"
              height="36.5855"
              rx="3.04879"
              fill="url(#paint39_linear_408_133)"
            />
            <rect
              x="465.356"
              y="9.48535"
              width="6.09758"
              height="56.9107"
              rx="3.04879"
              fill="url(#paint40_linear_408_133)"
            />
            <rect
              x="476.874"
              width="6.09758"
              height="66.3958"
              rx="3.04879"
              fill="url(#paint41_linear_408_133)"
            />
            <rect
              x="488.392"
              y="16.2607"
              width="6.09758"
              height="50.1356"
              rx="3.04879"
              fill="url(#paint42_linear_408_133)"
            />
            <rect
              x="499.909"
              y="6.77539"
              width="6.09758"
              height="59.6208"
              rx="3.04879"
              fill="url(#paint43_linear_408_133)"
            />
            <rect
              x="511.427"
              y="23.7129"
              width="6.09758"
              height="42.683"
              rx="3.04879"
              fill="url(#paint44_linear_408_133)"
            />
            <rect
              x="522.945"
              y="3.38818"
              width="6.09758"
              height="63.0083"
              rx="3.04879"
              fill="url(#paint45_linear_408_133)"
            />
            <rect
              x="534.462"
              y="37.9409"
              width="6.09758"
              height="28.4554"
              rx="3.04879"
              fill="url(#paint46_linear_408_133)"
            />
            <rect
              x="545.98"
              y="9.48535"
              width="6.09758"
              height="56.9107"
              rx="3.04879"
              fill="url(#paint47_linear_408_133)"
            />
            <rect
              x="557.498"
              y="18.293"
              width="6.09758"
              height="48.1031"
              rx="3.04879"
              fill="url(#paint48_linear_408_133)"
            />
            <rect
              x="569.015"
              y="6.77539"
              width="6.09758"
              height="59.6208"
              rx="3.04879"
              fill="url(#paint49_linear_408_133)"
            />
            <rect
              x="580.533"
              y="23.7129"
              width="6.09758"
              height="42.683"
              rx="3.04879"
              fill="url(#paint50_linear_408_133)"
            />
            <rect
              x="592.051"
              y="9.48535"
              width="6.09758"
              height="56.9107"
              rx="3.04879"
              fill="url(#paint51_linear_408_133)"
            />
            <rect
              x="603.568"
              width="6.09758"
              height="66.3958"
              rx="3.04879"
              fill="url(#paint52_linear_408_133)"
            />
            <rect
              x="615.086"
              y="3.38818"
              width="6.09758"
              height="63.0083"
              rx="3.04879"
              fill="url(#paint53_linear_408_133)"
            />
            <rect
              x="626.604"
              y="12.8726"
              width="6.09758"
              height="53.5232"
              rx="3.04879"
              fill="url(#paint54_linear_408_133)"
            />
            <rect
              x="638.121"
              y="35.9087"
              width="6.09758"
              height="30.4879"
              rx="3.04879"
              fill="url(#paint55_linear_408_133)"
            />
            <rect
              x="649.639"
              y="16.2607"
              width="6.09758"
              height="50.1356"
              rx="3.04879"
              fill="url(#paint56_linear_408_133)"
            />
            <rect
              x="661.156"
              y="29.8105"
              width="6.09758"
              height="36.5855"
              rx="3.04879"
              fill="url(#paint57_linear_408_133)"
            />
            <rect
              x="672.674"
              y="9.48535"
              width="6.09758"
              height="56.9107"
              rx="3.04879"
              fill="url(#paint58_linear_408_133)"
            />
            <rect
              x="684.192"
              y="21.6807"
              width="6.09758"
              height="44.7156"
              rx="3.04879"
              fill="url(#paint59_linear_408_133)"
            />
            <rect
              x="695.709"
              y="6.77539"
              width="6.09758"
              height="59.6208"
              rx="3.04879"
              fill="url(#paint60_linear_408_133)"
            />
            <rect
              x="707.227"
              y="18.293"
              width="6.09758"
              height="48.1031"
              rx="3.04879"
              fill="url(#paint61_linear_408_133)"
            />
            <rect
              x="718.745"
              y="35.9087"
              width="6.09758"
              height="30.4879"
              rx="3.04879"
              fill="url(#paint62_linear_408_133)"
            />
            <rect
              x="730.262"
              y="12.8726"
              width="6.09758"
              height="53.5232"
              rx="3.04879"
              fill="url(#paint63_linear_408_133)"
            />
            <rect
              x="741.78"
              y="21.6807"
              width="6.09758"
              height="44.7156"
              rx="3.04879"
              fill="url(#paint64_linear_408_133)"
            />
            <rect
              x="753.297"
              y="6.77539"
              width="6.09758"
              height="59.6208"
              rx="3.04879"
              fill="url(#paint65_linear_408_133)"
            />
            <rect
              x="764.815"
              width="6.09758"
              height="66.3958"
              rx="3.04879"
              fill="url(#paint66_linear_408_133)"
            />
            <rect
              x="776.333"
              y="9.48535"
              width="6.09758"
              height="56.9107"
              rx="3.04879"
              fill="url(#paint67_linear_408_133)"
            />
            <rect
              x="787.85"
              y="16.2607"
              width="6.09758"
              height="50.1356"
              rx="3.04879"
              fill="url(#paint68_linear_408_133)"
            />
            <rect
              x="799.368"
              y="26.4233"
              width="6.09758"
              height="39.973"
              rx="3.04879"
              fill="url(#paint69_linear_408_133)"
            />
            <rect
              x="810.886"
              y="12.8726"
              width="6.09758"
              height="53.5232"
              rx="3.04879"
              fill="url(#paint70_linear_408_133)"
            />
            <rect
              x="822.403"
              width="6.09758"
              height="66.3958"
              rx="3.04879"
              fill="url(#paint71_linear_408_133)"
            />
            <rect
              x="833.921"
              width="6.09758"
              height="66.3958"
              rx="3.04879"
              fill="url(#paint72_linear_408_133)"
            />
            <rect
              x="845.439"
              y="6.77539"
              width="6.09758"
              height="59.6208"
              rx="3.04879"
              fill="url(#paint73_linear_408_133)"
            />
            <rect
              x="856.956"
              y="16.2607"
              width="6.09758"
              height="50.1356"
              rx="3.04879"
              fill="url(#paint74_linear_408_133)"
            />
            <rect
              x="868.474"
              y="37.9409"
              width="6.09758"
              height="28.4554"
              rx="3.04879"
              fill="url(#paint75_linear_408_133)"
            />
            <rect
              x="879.572"
              y="12.8726"
              width="6.09758"
              height="53.5232"
              rx="3.04879"
              fill="url(#paint76_linear_408_133)"
            />
            <rect
              x="891.089"
              y="35.9087"
              width="6.09758"
              height="30.4879"
              rx="3.04879"
              fill="url(#paint77_linear_408_133)"
            />
            <rect
              x="902.607"
              y="18.293"
              width="6.09758"
              height="48.1031"
              rx="3.04879"
              fill="url(#paint78_linear_408_133)"
            />
            <rect
              x="914.125"
              y="29.8105"
              width="6.09758"
              height="36.5855"
              rx="3.04879"
              fill="url(#paint79_linear_408_133)"
            />
            <rect
              x="925.642"
              y="9.48535"
              width="6.09758"
              height="56.9107"
              rx="3.04879"
              fill="url(#paint80_linear_408_133)"
            />
            <rect
              x="937.16"
              width="6.09758"
              height="66.3958"
              rx="3.04879"
              fill="url(#paint81_linear_408_133)"
            />
            <rect
              x="948.677"
              y="16.2607"
              width="6.09758"
              height="50.1356"
              rx="3.04879"
              fill="url(#paint82_linear_408_133)"
            />
            <rect
              x="960.195"
              y="6.77539"
              width="6.09758"
              height="59.6208"
              rx="3.04879"
              fill="url(#paint83_linear_408_133)"
            />
            <rect
              x="971.713"
              y="23.7129"
              width="6.09758"
              height="42.683"
              rx="3.04879"
              fill="url(#paint84_linear_408_133)"
            />
            <rect
              x="983.23"
              y="3.38818"
              width="6.09758"
              height="63.0083"
              rx="3.04879"
              fill="url(#paint85_linear_408_133)"
            />
            <rect
              x="994.748"
              y="37.9409"
              width="6.09758"
              height="28.4554"
              rx="3.04879"
              fill="url(#paint86_linear_408_133)"
            />
            <rect
              x="1006.27"
              y="9.48535"
              width="6.09758"
              height="56.9107"
              rx="3.04879"
              fill="url(#paint87_linear_408_133)"
            />
            <rect
              x="1017.78"
              y="18.293"
              width="6.09758"
              height="48.1031"
              rx="3.04879"
              fill="url(#paint88_linear_408_133)"
            />
            <rect
              x="1029.3"
              y="6.77539"
              width="6.09758"
              height="59.6208"
              rx="3.04879"
              fill="url(#paint89_linear_408_133)"
            />
            <rect
              x="1040.82"
              y="23.7129"
              width="6.09758"
              height="42.683"
              rx="3.04879"
              fill="url(#paint90_linear_408_133)"
            />
            <rect
              x="1052.34"
              y="9.48535"
              width="6.09758"
              height="56.9107"
              rx="3.04879"
              fill="url(#paint91_linear_408_133)"
            />
            <rect
              x="1063.85"
              width="6.09758"
              height="66.3958"
              rx="3.04879"
              fill="url(#paint92_linear_408_133)"
            />
            <rect
              x="1075.37"
              y="3.38818"
              width="6.09758"
              height="63.0083"
              rx="3.04879"
              fill="url(#paint93_linear_408_133)"
            />
            <rect
              x="1086.89"
              y="12.8726"
              width="6.09758"
              height="53.5232"
              rx="3.04879"
              fill="url(#paint94_linear_408_133)"
            />
            <rect
              x="1098.41"
              y="35.9087"
              width="6.09758"
              height="30.4879"
              rx="3.04879"
              fill="url(#paint95_linear_408_133)"
            />
            <rect
              x="1109.92"
              y="16.2607"
              width="6.09758"
              height="50.1356"
              rx="3.04879"
              fill="url(#paint96_linear_408_133)"
            />
            <rect
              x="1121.44"
              y="29.8105"
              width="6.09758"
              height="36.5855"
              rx="3.04879"
              fill="url(#paint97_linear_408_133)"
            />
            <rect
              x="1132.96"
              y="9.48535"
              width="6.09758"
              height="56.9107"
              rx="3.04879"
              fill="url(#paint98_linear_408_133)"
            />
            <rect
              x="1144.48"
              y="21.6807"
              width="6.09758"
              height="44.7156"
              rx="3.04879"
              fill="url(#paint99_linear_408_133)"
            />
            <rect
              x="1155.99"
              y="6.77539"
              width="6.09758"
              height="59.6208"
              rx="3.04879"
              fill="url(#paint100_linear_408_133)"
            />
            <rect
              x="1167.51"
              y="18.293"
              width="6.09758"
              height="48.1031"
              rx="3.04879"
              fill="url(#paint101_linear_408_133)"
            />
            <rect
              x="1179.03"
              y="35.9087"
              width="6.09758"
              height="30.4879"
              rx="3.04879"
              fill="url(#paint102_linear_408_133)"
            />
            <rect
              x="1190.55"
              y="12.8726"
              width="6.09758"
              height="53.5232"
              rx="3.04879"
              fill="url(#paint103_linear_408_133)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_408_133"
              x1="8.11935"
              y1="9.48535"
              x2="8.11935"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_408_133"
              x1="19.637"
              y1="0"
              x2="19.637"
              y2="66.3958"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_408_133"
              x1="31.1547"
              y1="16.2607"
              x2="31.1547"
              y2="66.3964"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_408_133"
              x1="42.6723"
              y1="6.77539"
              x2="42.6723"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_408_133"
              x1="54.19"
              y1="23.7129"
              x2="54.19"
              y2="66.3959"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_408_133"
              x1="65.7076"
              y1="3.38818"
              x2="65.7076"
              y2="66.3965"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_408_133"
              x1="77.2252"
              y1="37.9409"
              x2="77.2252"
              y2="66.3963"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_408_133"
              x1="88.7429"
              y1="9.48535"
              x2="88.7429"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_408_133"
              x1="100.261"
              y1="18.293"
              x2="100.261"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_408_133"
              x1="111.778"
              y1="6.77539"
              x2="111.778"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_408_133"
              x1="123.296"
              y1="23.7129"
              x2="123.296"
              y2="66.3959"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_408_133"
              x1="134.813"
              y1="9.48535"
              x2="134.813"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_408_133"
              x1="146.331"
              y1="0"
              x2="146.331"
              y2="66.3958"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_408_133"
              x1="157.849"
              y1="3.38818"
              x2="157.849"
              y2="66.3965"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_408_133"
              x1="169.366"
              y1="12.8726"
              x2="169.366"
              y2="66.3957"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint15_linear_408_133"
              x1="180.884"
              y1="35.9087"
              x2="180.884"
              y2="66.3966"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint16_linear_408_133"
              x1="192.402"
              y1="16.2607"
              x2="192.402"
              y2="66.3964"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint17_linear_408_133"
              x1="203.919"
              y1="29.8105"
              x2="203.919"
              y2="66.396"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint18_linear_408_133"
              x1="215.437"
              y1="9.48535"
              x2="215.437"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint19_linear_408_133"
              x1="226.955"
              y1="21.6807"
              x2="226.955"
              y2="66.3962"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint20_linear_408_133"
              x1="238.472"
              y1="6.77539"
              x2="238.472"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint21_linear_408_133"
              x1="249.99"
              y1="18.293"
              x2="249.99"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint22_linear_408_133"
              x1="261.508"
              y1="35.9087"
              x2="261.508"
              y2="66.3966"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint23_linear_408_133"
              x1="273.025"
              y1="12.8726"
              x2="273.025"
              y2="66.3957"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint24_linear_408_133"
              x1="284.543"
              y1="21.6807"
              x2="284.543"
              y2="66.3962"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint25_linear_408_133"
              x1="296.061"
              y1="6.77539"
              x2="296.061"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint26_linear_408_133"
              x1="307.578"
              y1="0"
              x2="307.578"
              y2="66.3958"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint27_linear_408_133"
              x1="319.096"
              y1="9.48535"
              x2="319.096"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint28_linear_408_133"
              x1="330.613"
              y1="16.2607"
              x2="330.613"
              y2="66.3964"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint29_linear_408_133"
              x1="342.131"
              y1="26.4233"
              x2="342.131"
              y2="66.3963"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint30_linear_408_133"
              x1="353.649"
              y1="12.8726"
              x2="353.649"
              y2="66.3957"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint31_linear_408_133"
              x1="365.166"
              y1="0"
              x2="365.166"
              y2="66.3958"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint32_linear_408_133"
              x1="376.684"
              y1="0"
              x2="376.684"
              y2="66.3958"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint33_linear_408_133"
              x1="388.202"
              y1="6.77539"
              x2="388.202"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint34_linear_408_133"
              x1="399.719"
              y1="16.2607"
              x2="399.719"
              y2="66.3964"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint35_linear_408_133"
              x1="411.237"
              y1="37.9409"
              x2="411.237"
              y2="66.3963"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint36_linear_408_133"
              x1="422.335"
              y1="12.8726"
              x2="422.335"
              y2="66.3957"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint37_linear_408_133"
              x1="433.852"
              y1="35.9087"
              x2="433.852"
              y2="66.3966"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint38_linear_408_133"
              x1="445.37"
              y1="18.293"
              x2="445.37"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint39_linear_408_133"
              x1="456.888"
              y1="29.8105"
              x2="456.888"
              y2="66.396"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint40_linear_408_133"
              x1="468.405"
              y1="9.48535"
              x2="468.405"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint41_linear_408_133"
              x1="479.923"
              y1="0"
              x2="479.923"
              y2="66.3958"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint42_linear_408_133"
              x1="491.44"
              y1="16.2607"
              x2="491.44"
              y2="66.3964"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint43_linear_408_133"
              x1="502.958"
              y1="6.77539"
              x2="502.958"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint44_linear_408_133"
              x1="514.476"
              y1="23.7129"
              x2="514.476"
              y2="66.3959"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint45_linear_408_133"
              x1="525.993"
              y1="3.38818"
              x2="525.993"
              y2="66.3965"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint46_linear_408_133"
              x1="537.511"
              y1="37.9409"
              x2="537.511"
              y2="66.3963"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint47_linear_408_133"
              x1="549.029"
              y1="9.48535"
              x2="549.029"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint48_linear_408_133"
              x1="560.546"
              y1="18.293"
              x2="560.546"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint49_linear_408_133"
              x1="572.064"
              y1="6.77539"
              x2="572.064"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint50_linear_408_133"
              x1="583.582"
              y1="23.7129"
              x2="583.582"
              y2="66.3959"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint51_linear_408_133"
              x1="595.099"
              y1="9.48535"
              x2="595.099"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint52_linear_408_133"
              x1="606.617"
              y1="0"
              x2="606.617"
              y2="66.3958"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint53_linear_408_133"
              x1="618.134"
              y1="3.38818"
              x2="618.134"
              y2="66.3965"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint54_linear_408_133"
              x1="629.652"
              y1="12.8726"
              x2="629.652"
              y2="66.3957"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint55_linear_408_133"
              x1="641.17"
              y1="35.9087"
              x2="641.17"
              y2="66.3966"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint56_linear_408_133"
              x1="652.688"
              y1="16.2607"
              x2="652.688"
              y2="66.3964"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint57_linear_408_133"
              x1="664.205"
              y1="29.8105"
              x2="664.205"
              y2="66.396"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint58_linear_408_133"
              x1="675.723"
              y1="9.48535"
              x2="675.723"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint59_linear_408_133"
              x1="687.24"
              y1="21.6807"
              x2="687.24"
              y2="66.3962"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint60_linear_408_133"
              x1="698.758"
              y1="6.77539"
              x2="698.758"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint61_linear_408_133"
              x1="710.276"
              y1="18.293"
              x2="710.276"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint62_linear_408_133"
              x1="721.793"
              y1="35.9087"
              x2="721.793"
              y2="66.3966"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint63_linear_408_133"
              x1="733.311"
              y1="12.8726"
              x2="733.311"
              y2="66.3957"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint64_linear_408_133"
              x1="744.829"
              y1="21.6807"
              x2="744.829"
              y2="66.3962"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint65_linear_408_133"
              x1="756.346"
              y1="6.77539"
              x2="756.346"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint66_linear_408_133"
              x1="767.864"
              y1="0"
              x2="767.864"
              y2="66.3958"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint67_linear_408_133"
              x1="779.382"
              y1="9.48535"
              x2="779.382"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint68_linear_408_133"
              x1="790.899"
              y1="16.2607"
              x2="790.899"
              y2="66.3964"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint69_linear_408_133"
              x1="802.417"
              y1="26.4233"
              x2="802.417"
              y2="66.3963"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint70_linear_408_133"
              x1="813.935"
              y1="12.8726"
              x2="813.935"
              y2="66.3957"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint71_linear_408_133"
              x1="825.452"
              y1="0"
              x2="825.452"
              y2="66.3958"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint72_linear_408_133"
              x1="836.97"
              y1="0"
              x2="836.97"
              y2="66.3958"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint73_linear_408_133"
              x1="848.488"
              y1="6.77539"
              x2="848.488"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint74_linear_408_133"
              x1="860.005"
              y1="16.2607"
              x2="860.005"
              y2="66.3964"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint75_linear_408_133"
              x1="871.523"
              y1="37.9409"
              x2="871.523"
              y2="66.3963"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint76_linear_408_133"
              x1="882.62"
              y1="12.8726"
              x2="882.62"
              y2="66.3957"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint77_linear_408_133"
              x1="894.138"
              y1="35.9087"
              x2="894.138"
              y2="66.3966"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint78_linear_408_133"
              x1="905.656"
              y1="18.293"
              x2="905.656"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint79_linear_408_133"
              x1="917.173"
              y1="29.8105"
              x2="917.173"
              y2="66.396"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint80_linear_408_133"
              x1="928.691"
              y1="9.48535"
              x2="928.691"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint81_linear_408_133"
              x1="940.209"
              y1="0"
              x2="940.209"
              y2="66.3958"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint82_linear_408_133"
              x1="951.726"
              y1="16.2607"
              x2="951.726"
              y2="66.3964"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint83_linear_408_133"
              x1="963.244"
              y1="6.77539"
              x2="963.244"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint84_linear_408_133"
              x1="974.761"
              y1="23.7129"
              x2="974.761"
              y2="66.3959"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint85_linear_408_133"
              x1="986.279"
              y1="3.38818"
              x2="986.279"
              y2="66.3965"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint86_linear_408_133"
              x1="997.797"
              y1="37.9409"
              x2="997.797"
              y2="66.3963"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint87_linear_408_133"
              x1="1009.31"
              y1="9.48535"
              x2="1009.31"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint88_linear_408_133"
              x1="1020.83"
              y1="18.293"
              x2="1020.83"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint89_linear_408_133"
              x1="1032.35"
              y1="6.77539"
              x2="1032.35"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint90_linear_408_133"
              x1="1043.87"
              y1="23.7129"
              x2="1043.87"
              y2="66.3959"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint91_linear_408_133"
              x1="1055.39"
              y1="9.48535"
              x2="1055.39"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint92_linear_408_133"
              x1="1066.9"
              y1="0"
              x2="1066.9"
              y2="66.3958"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint93_linear_408_133"
              x1="1078.42"
              y1="3.38818"
              x2="1078.42"
              y2="66.3965"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint94_linear_408_133"
              x1="1089.94"
              y1="12.8726"
              x2="1089.94"
              y2="66.3957"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint95_linear_408_133"
              x1="1101.46"
              y1="35.9087"
              x2="1101.46"
              y2="66.3966"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint96_linear_408_133"
              x1="1112.97"
              y1="16.2607"
              x2="1112.97"
              y2="66.3964"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint97_linear_408_133"
              x1="1124.49"
              y1="29.8105"
              x2="1124.49"
              y2="66.396"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint98_linear_408_133"
              x1="1136.01"
              y1="9.48535"
              x2="1136.01"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint99_linear_408_133"
              x1="1147.53"
              y1="21.6807"
              x2="1147.53"
              y2="66.3962"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint100_linear_408_133"
              x1="1159.04"
              y1="6.77539"
              x2="1159.04"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint101_linear_408_133"
              x1="1170.56"
              y1="18.293"
              x2="1170.56"
              y2="66.3961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint102_linear_408_133"
              x1="1182.08"
              y1="35.9087"
              x2="1182.08"
              y2="66.3966"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
            <linearGradient
              id="paint103_linear_408_133"
              x1="1193.6"
              y1="12.8726"
              x2="1193.6"
              y2="66.3957"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADB5FF" />
              <stop offset="1" stop-color="#FF9BE3" />
            </linearGradient>
          </defs>
        </svg>

        <img
          src={cover}
          alt=""
          width={450}
          height={450}
          style={{
            borderRadius: 36,
            boxShadow: '0 0 30px rgba(0,0,0,0.2)',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
