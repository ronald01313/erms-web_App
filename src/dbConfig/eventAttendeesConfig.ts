import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_ATTENDEE!);

        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('MongoDB Connected Successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB Connection Error. Please make sure MongoDB is running. ' + err);
            process.exit(1);
        })

    } catch (error) {
        console.log("Something goes Wrong");
        console.log(error);

    }
}
