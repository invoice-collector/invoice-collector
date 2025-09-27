
import { SketchCollector } from '../../sketchCollector';

export class JitpackCollector extends SketchCollector {

    static CONFIG = {
        id: "jitpack",
        name: "Jitpack",
        description: "i18n.collectors.jitpack.description",
        version: "0",
        website: "https://jitpack.io/private/invoice?customer=cus_GnJ83OJPm0JO7n&id=in_1GbT6yHW6oMZPh38aYAQlBhn",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/239869.jpg",
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
        entryUrl: "https://jitpack.io/private/invoice?customer=cus_GnJ83OJPm0JO7n&id=in_1GbT6yHW6oMZPh38aYAQlBhn",
    }

    constructor() {
        super(JitpackCollector.CONFIG);
    }
}
