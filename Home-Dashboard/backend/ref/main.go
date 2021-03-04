// main.go
package main

func main() {
	a := App{}
	a.Initialize(
		"postgres",
		"bcaabc123123postgres",
		"Home-Dashboard")

	a.Run(":8010")
}
