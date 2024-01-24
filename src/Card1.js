import React from 'react'


export default function Card() {
  return (
    <div>
        {/* BTC info*/}
        <div style={{width: '100%', height:'100%', position: 'relative'}}>
        <div style={{width:366, height: 56, left:0, top: 0, position:'staic', background:'#2F2E2E', borderRadius:4}} />
        <div style={{left: 20, top: 21, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>#1</div>
        <img style={{width: 28, height: 28, left: 70, top: 14, position: 'absolute', borderRadius: 9999}} src="https://s3-alpha-sig.figma.com/img/9a6b/884b/0c610e0d33d26ec683b6d2bcd52b646a?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hDCZzr5mEhsIuL6AGKw0keDTi4zi7t~MaSfHz5RCHgfMk-9Y8jQD5XYRWi0OdekC4jY~byHhnQwMUTxedfUS4K9h04hxPprGprzsoOil7lu9ldl1F~AdMUdSpcDaYhXqwPw4AiCqUwLk2DVoQqLu-beq1lQouIO3A0IgzN1VUBFNMmefjXQ5ge0Q7y9nB~Z-F7I1Kr0eGOVeobcJv2A5gCy-CsK~XiCmPyFus3-peg0jm29Nd3NMt7uOB3feVT2lKke7lf0~dDwknzrpzypTVPRDGbBrw3GPzBIb~jjF-c54h49sN~1xE7gz45tt99WvqXQwHQ9zXb~Q4gg-h3YInQ__" />
        <div style={{left: 100, top: 21, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>BTC</div>
        <div style={{left: 170, top: 21, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>$26,123.21</div>
            <div style={{position: 'relative'}}>
                <div style={{left: 300, top: -35, position: 'absolute', background:'#24FF00',colorhttps: 'green', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>1.50%</div>
                <div style={{width: '100%', height: '100%', background: '/green.png', borderRadius: 4, border:'5px solid rgba(0, 0, 0, 0.3)'}}></div>
            </div>
        </div>
        
    </div>
    
    
  )
}
