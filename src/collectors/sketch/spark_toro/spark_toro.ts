
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SparkToroCollector extends SketchCollector {

    static CONFIG = {
        id: "spark_toro",
        name: "Spark Toro",
        description: "i18n.collectors.spark_toro.description",
        version: "0",
        website: "https://sparktoro.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1092465.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://sparktoro.com/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SparkToroCollector.CONFIG);
    }
}
