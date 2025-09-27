
import { SketchCollector } from '../../sketchCollector';

export class HackSparkCollector extends SketchCollector {

    static CONFIG = {
        id: "hack_spark",
        name: "Hack Spark",
        description: "i18n.collectors.hack_spark.description",
        version: "0",
        website: "https://hackspark.fr/en/login?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120458.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://hackspark.fr/en/login?back=my-account",
    }

    constructor() {
        super(HackSparkCollector.CONFIG);
    }
}
