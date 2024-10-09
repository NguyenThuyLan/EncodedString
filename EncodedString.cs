using System.Text;

namespace EncodedString
{
	public class EncodedString
	{
		public string Value { get; init; }
		public string DecodedValue => Encoding.UTF8.GetString(Convert.FromBase64String(Value));
	}
}
