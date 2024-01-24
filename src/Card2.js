import React from 'react'

export default function Card2() {
  return (
    <div>
        {/* BCH info*/}
        <div style={{width: '100%', height:'100%', position: 'relative'}}>
        <div style={{width:366, height: 56, left:0, top: 200, position:'static', background:'#2F2E2E', borderRadius:4}} />
        <div style={{left: 20, top: 21, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>#2</div>
        <img style={{width: 28, height: 28, left: 70, top: 14, position: 'absolute', borderRadius: 9999}} src="https://s3-alpha-sig.figma.com/img/788d/eb9c/bcee0acee755f2edfb20c565599f853a?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HRb6HXWdvYkIX5AL-Ab0A92gBY-AQtTJCi5O-16Jm~Dmms8W6avgZbjNZq7MZZu2muIhXL-wL1XRGljdNuAibAGOzkeZjgH1lt~iBihMI8B7R-ZpIBgg17Fq0zTKKRCAdavgzbhf2LsvYlo56OdxlfyxfBrIhre0Ra14jG~aSgIEPJEMTXNaZ5zm1teafHGz3c33UPbKNqrwy3xUuK7D7JGL7zB1s3Kxm2RsDemy39Blfh~CVP9A2Ic1NuwFrV~1~hZjEZpMvpcuMx1fRUD3efZ3H5OTZ4g6MBwFBTupmokrRZze42tEh8i8BXETaHSMLDb905zNVlLn-NqIfgimug__" />
        <div style={{left: 100, top: 21, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>BCH</div>
        <div style={{left: 170, top: 21, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>$26,123.21</div>
            <div style={{position: 'relative'}}>
                <div style={{left: 300, top: -35, position: 'absolute', background:'#FF0000',colorhttps: 'red', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>1.50%</div>
                
            </div>
        </div>
    </div>
  )
}
