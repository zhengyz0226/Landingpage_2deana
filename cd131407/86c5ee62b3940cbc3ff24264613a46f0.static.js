function calculateDate(){
    var dayNames    =   ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
    var monthNames  =   ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var now=new Date();
    document.write(dayNames[now.getDay()]+", "+monthNames[now.getMonth()]+" "+now.getDate()+", "+now.getFullYear());
}

function showMonthandYear(){
    var dayNames    =   ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
    var monthNames  =   ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var now=new Date();
    document.write(monthNames[now.getMonth()]+" "+now.getFullYear());
}

function showDayOfWeek(){
    var dayNames    =   ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
    var now=new Date();
    document.write(dayNames[now.getDay()]);
}

function date( n, t ) {
    var e, r, u = this,
        o = '[ "Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]',
        i = /\\?(.?)/gi,
        c = function ( n, t ) {
            return r[ n ] ? r[ n ]() : t
        },
        a = function ( n, t ) {
            for ( n = String( n ); n.length < t; ) n = "0" + n;
            return n
        };
    return r = {
        d: function () {
            return a( r.j(), 2 )
        },
        D: function () {
            return r.l().slice( 0, 3 )
        },
        j: function () {
            return e.getDate()
        },
        l: function () {
            return o[ r.w() ]
        },
        N: function () {
            return r.w() || 7
        },
        S: function () {
            var n = r.j(),
                t = n % 10;
            return 3 >= t && 1 == parseInt( n % 100 / 10, 10 ) && ( t = 0 ), [ "st", "nd", "rd" ][ t - 1 ] || "th"
        },
        w: function () {
            return e.getDay()
        },
        z: function () {
            var n = new Date( r.Y(), r.n() - 1, r.j() ),
                t = new Date( r.Y(), 0, 1 );
            return Math.round( ( n - t ) / 864e5 )
        },
        W: function () {
            var n = new Date( r.Y(), r.n() - 1, r.j() - r.N() + 3 ),
                t = new Date( n.getFullYear(), 0, 4 );
            return a( 1 + Math.round( ( n - t ) / 864e5 / 7 ), 2 )
        },
        F: function () {
            return o[ 6 + r.n() ]
        },
        m: function () {
            return a( r.n(), 2 )
        },
        M: function () {
            return r.F().slice( 0, 3 )
        },
        n: function () {
            return e.getMonth() + 1
        },
        t: function () {
            return new Date( r.Y(), r.n(), 0 ).getDate()
        },
        L: function () {
            var n = r.Y();
            return n % 4 === 0 & n % 100 !== 0 | n % 400 === 0
        },
        o: function () {
            var n = r.n(),
                t = r.W(),
                e = r.Y();
            return e + ( 12 === n && 9 > t ? 1 : 1 === n && t > 9 ? -1 : 0 )
        },
        Y: function () {
            return e.getFullYear()
        },
        y: function () {
            return r.Y().toString().slice( -2 )
        },
        a: function () {
            return e.getHours() > 11 ? "pm" : "am"
        },
        A: function () {
            return r.a().toUpperCase()
        },
        B: function () {
            var n = 3600 * e.getUTCHours(),
                t = 60 * e.getUTCMinutes(),
                r = e.getUTCSeconds();
            return a( Math.floor( ( n + t + r + 3600 ) / 86.4 ) % 1e3, 3 )
        },
        g: function () {
            return r.G() % 12 || 12
        },
        G: function () {
            return e.getHours()
        },
        h: function () {
            return a( r.g(), 2 )
        },
        H: function () {
            return a( r.G(), 2 )
        },
        i: function () {
            return a( e.getMinutes(), 2 )
        },
        s: function () {
            return a( e.getSeconds(), 2 )
        },
        u: function () {
            return a( 1e3 * e.getMilliseconds(), 6 )
        },
        e: function () {
            throw "Not supported (see source code of date() for timezone on how to add support)"
        },
        I: function () {
            var n = new Date( r.Y(), 0 ),
                t = Date.UTC( r.Y(), 0 ),
                e = new Date( r.Y(), 6 ),
                u = Date.UTC( r.Y(), 6 );
            return n - t !== e - u ? 1 : 0
        },
        O: function () {
            var n = e.getTimezoneOffset(),
                t = Math.abs( n );
            return ( n > 0 ? "-" : "+" ) + a( 100 * Math.floor( t / 60 ) + t % 60, 4 )
        },
        P: function () {
            var n = r.O();
            return n.substr( 0, 3 ) + ":" + n.substr( 3, 2 )
        },
        T: function () {
            return "UTC"
        },
        Z: function () {
            return 60 * -e.getTimezoneOffset()
        },
        c: function () {
            return "Y-m-d\\TH:i:sP".replace( i, c )
        },
        r: function () {
            return "D, d M Y H:i:s O".replace( i, c )
        },
        U: function () {
            return e / 1e3 | 0
        }
    }, this.date = function ( n, t ) {
        return u = this, e = void 0 === t ? new Date : new Date( t instanceof Date ? t : 1e3 * t ), n.replace( i, c )
    }, this.date( n, t )
}

// var mydate = new Date();
// mydate.setDate( mydate.getDate() - 0 );
// var year = mydate.getYear()
// if ( year < 1000 )
//     year += 1900
// var daym = mydate.getDate()
// if ( daym < 10 )
//     daym = "0" + daym


// var dayarray = new Array( "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" );
// var montharray = new Array( "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" );
// var day = mydate.getDate();
// var month = mydate.getMonth();
// var year = mydate.getFullYear();



var mydate = new Date()
mydate.setDate( mydate.getDate() - 0 );
var year = mydate.getYear()
if ( year < 1000 )
    year += 1900
var day = mydate.getDay()
var month = mydate.getMonth()
var daym = mydate.getDate()
if ( daym < 10 )
    daym = "0" + daym
var dayarray = new Array( "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag" );
var montharray = new Array( "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" );

