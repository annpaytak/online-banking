module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            number: Number,
            expiryDate: Number,
            cvcCode: Number,
            balance: Number,
            cashBack: Number
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Card = mongoose.model("card", schema);
    return Card;
};
