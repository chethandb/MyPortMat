import { HttpClient } from "aurelia-fetch-client";
import { inject } from "aurelia-framework";

@inject(HttpClient)
export class Fetchdata {
	constructor(private http: HttpClient) { }

	forecasts: IWeatherForecast[];

	testData: string;

	async activate() {
		this.forecasts = await this.http.fetch("api/SampleData/WeatherForecasts")
										.then(result => result.json() as Promise<IWeatherForecast[]>);

		this.testData = await this.http.fetch("api/Test/Tests")
								   .then(result => result.text() as Promise<string>);

	}
}

interface IWeatherForecast {
	dateFormatted: string;
	temperatureC: number;
	temperatureF: number;
	summary: string;
}
