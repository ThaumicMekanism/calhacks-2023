import openai
import re

openai.organization = "org-UnCuRgsuSHGeQc4B4nULBhuW"
# openai.api_key = "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"
# openai.api_key = "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"
openai.api_key = "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"

def make_flash_cards(prompt):
    completion = openai.ChatCompletion.create(
    model = 'gpt-3.5-turbo',
    messages = [
        {'role': 'system', 'content': 'Act like you are a API and you will only return responses formatted as a line starting with question: and a line starting with answer:.'},
        {'role': 'assistant', 'content': 'Alright'},
        {'role': 'user', 'content': 'Create a 10 questions and answers for a quiz with the data I send you next.'},
        {'role': 'assistant', 'content': 'Alright'},
        {'role': 'user', 'content': '{}'.format(prompt)}
    ],
    temperature = 0
    )

    question_answer = completion['choices'][0]['message']['content']
    # question_answer = question_answer.strip()
    # qa_list = [tuple(x.split(',')) for x in re.findall("\((.*?)\)", question_answer)]

    question_pattern = re.compile("question\s*\d*\s*:\s*", re.IGNORECASE)
    answer_pattern = re.compile("answer\s*\d*:\s*", re.IGNORECASE)
    qa_list = []
    question = None
    answer = None
    for line in question_answer.split("\n"):
        lower_line = line.lower().strip()
        if lower_line.startswith("question"):
            if question != None and answer != None:
                parsed_question = question_pattern.sub("", question.strip())
                parsed_answer = answer_pattern.sub("", answer.strip())
                qa_list.append((parsed_question, parsed_answer))
                question = None
                answer = None
            if answer != None and question == None:
                answer = None
            question = line
        elif question != None and lower_line.startswith("answer"):
            answer = line
        elif question != None and answer == None:
            question += f"\n{line}"
        elif question != None and answer != None:
            answer += f"\n{line}"

    # print(qa_list)
    return qa_list


# if __name__ == "__main__":
#     prompt = "The above equation states that the convolution of two signals is equivalent to the multiplication of their Fourier transforms. Therefore, by transforming the input into frequency space, a convolution becomes a single element-wise multiplication. In other words, the input to a convolutional layer and kernel can be converted into frequencies using the Fourier Transform, multiplied once and then converted back using the inverse Fourier Transform. There is an overhead associated with transforming the inputs into the Fourier domain and the inverse Fourier Transform to get responses back to the spatial domain. However, this is offset by the speed up obtained from performing a single multiplication instead of having to multiply the kernel with different sections of the image."
#     completion = make_flash_cards(prompt=prompt)
#     print(completion)