
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OuraringComCollector extends SketchCollector {

    static CONFIG = {
        id: "ouraring_com",
        name: "ouraring.com",
        description: "i18n.collectors.ouraring_com.description",
        version: "0",
        website: "https://ouraring.com/my-account/71a46b62b3ae7f22c3f64668a77ed618d8e4eb6f6c8f8407743413bf8c71da42c02ce7e4fd9e0fcfbbfa6a3a4347be5be0ed22638751c24577ed0cb0f966f14590a87c38d7419a842b9c11d9c22a55e22ab00a3dce810b0d32ea7d381eea78a55b50369972fea0e7db1b1440a143a86",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1668450.jpg",
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
        entryUrl: "https://ouraring.com/my-account/71a46b62b3ae7f22c3f64668a77ed618d8e4eb6f6c8f8407743413bf8c71da42c02ce7e4fd9e0fcfbbfa6a3a4347be5be0ed22638751c24577ed0cb0f966f14590a87c38d7419a842b9c11d9c22a55e22ab00a3dce810b0d32ea7d381eea78a55b50369972fea0e7db1b1440a143a86",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OuraringComCollector.CONFIG);
    }
}
