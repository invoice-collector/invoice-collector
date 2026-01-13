
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SparkCoNzCollector extends SketchCollector {

    static CONFIG = {
        id: "spark_co_nz",
        name: "Spark.co.nz",
        description: "i18n.collectors.spark_co_nz.description",
        version: "0",
        website: "https://www.spark.co.nz/myspark/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8706.jpg",
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
        loginUrl: "https://www.spark.co.nz/myspark/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SparkCoNzCollector.CONFIG);
    }
}
