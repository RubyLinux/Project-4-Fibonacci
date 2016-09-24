function fibonacci() {
	this.looping = function(nb){
		var a = 0
		var b = 1
		var c = null;
			for ( var i = 2; i <= nb; i++){
				c = a + b; a = b; b = c;}
			return c;
			};
			}
		var c = new fibonacci();
		var fiboSeq = "";
			for ( var i = 2 ; i <= 100 ; i++ ) {
				fiboSeq += c.looping(i) + " ";}
				console.log(fiboSeq)
			
